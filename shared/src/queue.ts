import { Channel, connect, ConsumeMessage, Message } from 'amqplib';
import { v4 as uuid } from 'uuid';

import { sleep } from './utils';

const CHANNEL_EVENTS = ['error', 'return', 'drain'];
const CONNECTION_EVENTS = ['error', 'close', 'blocked', 'unblocked'];

enum QueueStatus {
  CONNECTED,
  CONNECTING,
  DISCONNECTED,
}

interface QueueHandler<T> {
  (message: T): Promise<void>;
}

export class Queue<T extends any> {
  private channel?: Channel;
  private status: QueueStatus = QueueStatus.DISCONNECTED;

  private uuid: string;
  private consumer?: string;

  private consumers: Map<string, QueueHandler<T>>;

  /**
   * Queue constructor
   *
   * @constructor
   * @param {string} url
   * @param {string} exchange
   */
  constructor(private url: string, private exchange: string, id?: string) {
    this.uuid = id ?? uuid();
    this.consumers = new Map();
  }

  public get name(): string {
    return `${this.exchange}:${this.uuid}`;
  }

  public async connect(): Promise<Queue<T>> {
    this.status = QueueStatus.CONNECTING;
    let attempt = 0;
    const maxTries = 3;

    do {
      /**
       * Establish AMQP connection */
      this.channel = await this.getChannel();
      if (this.channel) break;

      /**
       * Sleep a bit before we retry */
      await sleep(2000);
    } while (++attempt < maxTries);

    /**
     * If we still don't have a channel, throw an error
     * we most likely exhausted our retries. */
    if (!this.channel) {
      console.error('Failed to connect to queue');
      throw new Error('Failed to establish connection');
    }

    await this.assertQueue();
    await this.assertExchange();

    console.log('Connection established');
    return this;
  }

  public async close() {
    try {
      /**
       * Close connection if available,
       * and unset it. */
      await this.channel?.close();
    } finally {
      this.status = QueueStatus.DISCONNECTED;
      this.channel = undefined;
    }
  }

  public async publish(topic: string, message: Record<string, any>): Promise<void> {
    if (!this.channel) {
      /**
       * If the conneciton is closed we'll let
       * the caller know, we'll try to reconnect
       * as soon as possible. */
      throw new Error('Connection to AMQP server is closed');
    }

    /**
     * Publish message to exchange. */
    const data = JSON.stringify({ topic, message });
    const content = Buffer.from(data);
    await this.channel?.publish(this.exchange, topic, content);
  }

  /**
   * Subscribe to RabbitMQ channel, this will
   * newer fullfill the promise.
   *
   * @param topic
   * @param callback
   */
  public async subscribe(topic: string, callback: QueueHandler<T>): Promise<void> {
    /**
     * Register the consumer, that way we can recreate
     * it on connection closure. */
    this.consumers.set(topic, callback);
    await this.consumeQueue();
    await this.bindQueue(topic);
  }

  private async assertQueue() {
    if (!this.channel) {
      throw new Error('Channel is not available');
    }

    await this.channel.assertQueue(this.name, { durable: true });
  }

  private async assertExchange() {
    if (!this.channel) {
      throw new Error('Channel is not available');
    }

    await this.channel.assertExchange(this.exchange, 'direct', { durable: true });
  }

  private async bindQueue(topic: string) {
    await this.channel?.bindQueue(this.name, this.exchange, topic);
  }

  private async consumeQueue() {
    if (!this.channel) {
      throw new Error('Channel is not available');
    }

    /**
     * Declare queue and consume it if we're
     * not consuming it yet (ex.: after re-connect) */
    await this.channel.prefetch(1);
    if (!this.consumer) {
      const { consumerTag } = await this.channel.consume(this.name, this.handleMessage, { noAck: false });
      this.consumer = consumerTag;
    }
  }

  private getChannel = async () => {
    try {
      /**
       * Try to connect to RabbitMQ instance,
       * and register a new error handler */
      const connection = await connect(this.url);
      connection.on('error', this.handleError);

      /**
       * Setup communication channel */
      const channel = await connection.createChannel();
      channel.on('error', this.handleError);
      channel.on('close', this.handleError);

      this.status = QueueStatus.CONNECTED;
      return channel;
    } catch (err) {
      // @ts-expect-error
      console.error(`Failed to connect to RabbitMQ: ${err.message}`);
      return undefined;
    }
  };

  private getPayload<T>(msg: Message): T {
    try {
      const rawPayload = msg.content.toString('utf8');
      return rawPayload ? JSON.parse(rawPayload) : {};
    } catch {
      return {} as any;
    }
  }

  private getConsumer(topic: string): QueueHandler<T> {
    const handler = this.consumers.get(topic);
    if (!handler) {
      /**
       * If we don't have a handler for the topic
       * we'll just ack the message, and log an error. */
      return async () => {
        console.error(`No consumer found for topic: ${topic}`);
      };
    }

    return handler;
  }

  private handleError = async (err: Error) => {
    /**
     * @NOTE (Maurice):
     * In case of a connection error, we'll
     * try to reconnect to the queue. */
    console.error('Connection error: ', err);
    if (this.status !== QueueStatus.CONNECTING) {
      try {
        if (this.consumer) {
          /**
           * Try to cancel the consumer.
           * We don't really care if this fails, we'll
           * just try to reconnect. */
          await this.channel?.cancel(this.consumer);
        }
      } finally {
        /**
         * Force consumer to be undefined */
        this.consumer = undefined;
      }

      /**
       * @NOTE (Maurice):
       * We'll wrap inside a try/catch to make
       * sure we don't break any internals. */
      try {
        /**
         * Open a new connection */
        await this.connect();

        /**
         * Re-subscribe to all topics */
        const topicKeys = [...this.consumers.keys()];
        if (topicKeys.length > 0) {
          this.consumeQueue();
          for (const topic of topicKeys) {
            await this.bindQueue(topic);
          }
        }
      } catch {
        console.error('Failed to reconnect to queue');
        process.exit(1);
      }
    }
  };

  private handleMessage = async (msg: ConsumeMessage | null) => {
    if (!msg) {
      /**
       * @NOTE (Maurice):
       * If we've received an empty messages
       * this means WE'VE BEEN CANCELLED! */
      this.handleError(new Error('Consumer cancelled'));
      return;
    }

    /**
     * Convert RabbitMQ payload */
    const payload = this.getPayload<any>(msg);
    const handler = this.getConsumer(payload.topic);

    /**
     * Try to execute handler fn */
    handler(payload.message).then(
      () => this.channel?.ack(msg),
      (err) => {
        console.error('Failed to run job: ', err);
        this.channel?.nack(msg, false, false);
      },
    );
  };
}
