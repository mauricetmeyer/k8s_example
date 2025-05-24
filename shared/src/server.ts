/**
 * service.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * (c) Laviréo. All rights reserved.
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 */

import once                                                      from 'lodash/once';
import { handleException, initSentry }                           from '~/utils/sentry';
import { Matcher }                                               from './utils/matcher';
import { Request }                                               from '~/utils/request';
import { Response }                                              from '~/utils/response';
import { InputError }                                            from './utils/errors';
import { createServer, IncomingMessage, ServerResponse, Server as NodeServer } from 'http';

export type Handler<T = unknown> = {
  (request: Request, response: Response, context: T) : Promise<void> | void;
}

export class Server<T>
{
  private context: T;

  private handle:  NodeServer;
  private matcher: Matcher<Handler<T>>;

  constructor (context: T)
  {
    /**
     * Assign context and create server */
    this.context = context;
    this.matcher = new Matcher();
    this.handle  = createServer(this.handleRequest);

    /**
     * Register handlers */
    initSentry();
    this.registerHandlers();
  }

  

  /**
   * Start the service
   *
   * @param {number} port
   */
  public async listen (port: number) : Promise<void>
  {
    this.handle.listen(port);
  }

  /**
   * Shutdown the service
   *
   * @returns {Promise<void>}
   */
  public async shutdown () : Promise<void>
  {
    this.handle.close();
    process.exit();
  }

  /**
   * Helper methods to define
   * HTTP routes
   *
   * @param {string} path
   * @param {Handler<T>} handler
   */
  public readonly get     = (path: string, handler: Handler<T>) => this.define('GET', path, handler);
  public readonly put     = (path: string, handler: Handler<T>) => this.define('PUT', path, handler);
  public readonly post    = (path: string, handler: Handler<T>) => this.define('POST', path, handler);
  public readonly trace   = (path: string, handler: Handler<T>) => this.define('TRACE', path, handler);
  public readonly delete  = (path: string, handler: Handler<T>) => this.define('DELETE', path, handler);
  public readonly options = (path: string, handler: Handler<T>) => this.define('OPTIONS', path, handler);

  /**
   * Register a handler for a route
   *
   * @param {string}     method
   * @param {string}     path
   * @param {Handler<T>} handler
   */
  private define (method: string, path: string, handler: Handler<T>) : void
  {
    this.matcher.add(method, path, handler);
  }


  private handleRequest = async (req: IncomingMessage, res: ServerResponse) : Promise<void> => {
    /**
     * Create wrapper around request and response
     * to pass to handlers */
    const request  = new Request(req);
    const response = new Response(res);

    try {
      /**
       * Check if we have a matching handler */
      const { path, method } = request;
      const match = this.matcher.resolve(method, path);
      if (!match)
      {
        /**
         * No matching method found, return InputError */
        throw new InputError(`Not found: ${path}`);
      }

      /**
       * Try to call the handler, after finished we'll
       * write the response. */
      await match.handler(request, response, this.context);
    }
    catch (err) {
      /**
       * Notify sentry about this error */
      handleException(err, 'Service encountered an error');

      /**
       * @TODO (Maurice):
       * Make it so that we actually return something
       * in case that we encounter an error. */
    }
  }

  private registerHandlers () : void
  {
    /**
     * Wrap into `once` to avoid multiple callings. */
    const handleExit = once(() => this.shutdown());

    process.on('exit',    handleExit);
    process.on('SIGINT',  handleExit);
    process.on('SIGTERM', handleExit);
  }
}
