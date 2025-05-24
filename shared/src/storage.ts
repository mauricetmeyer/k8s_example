/**
 * storage.ts
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

import { pipeline, Readable } from 'stream';
import { WriteProps }         from './storage/types';
import { parseUrl }           from './storage/utils';
import Chunker                from './utils/chunker';
import {
  S3Client,
  UploadPartCommand,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  CreateMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  AbortMultipartUploadCommand
} from '@aws-sdk/client-s3';

const S3_SIZE_MAX  = 1024 * 1024 * 1024; // 1GB
const S3_SIZE_PART = 1024 * 1024;        // 1MB

export class Storage
{
  private readonly client: S3Client;

  /**
   * Constructor
   *
   * @public
   * @param {string} url
   */
  public constructor (url: string)
  {
    const { key, secret, endpoint } = parseUrl(url);
    if (!key || !secret || !endpoint) {
      throw new Error('Missing required properties');
    }

    this.client = new S3Client({
      endpoint,
      credentials: {
        accessKeyId:     key,
        secretAccessKey: secret
      },

      /**
       * Just to make the SDK work... */
      region: 'us-east-1',
    });
  }

  /**
   * Read object from bucket
   *
   * @public
   * @param   {string} bucket
   * @param   {string} key
   * @returns {Promise<Buffer>}
   */
  public async get (bucket: string, key: string) : Promise<ReadableStream | undefined>
  {
    const cmd = new GetObjectCommand({ Bucket: bucket, Key: key });
    return this.client.send(cmd).then(res => res.Body as ReadableStream);
  }

  /**
   * write object to bucket
   *
   * @public
   * @param   {string}            bucket
   * @param   {string}            key
   * @param   {Buffer | Readable} data
   * @param   {WriteProps}        properties
   * @returns {Promise<void>}
   */
  public async write (bucket: string, key: string, data: Buffer | Readable, properties?: WriteProps) : Promise<void>
  {
    const { type, hidden = true } = properties ?? {};

    /**
     * Setup readable and
     * pipe input into the chunker */
    const acl     = hidden ? 'private' : 'public-read';
    const input   = data instanceof Readable ? data : Readable.from(data);
    const chunker = new Chunker(S3_SIZE_PART);
    const chunks  = pipeline(input, chunker);
    const parts   = [];

    let size = 0;
    let part = 0;
    let upload;

    /**
     * Iterate over all chunks */
    for await (const chunk of chunks) {
      /**
       * Append chunk length to the total size. */
      size += chunk.length;
      if (size > S3_SIZE_MAX)
      {
        /**
         * Clean up the multipart upload! */
        const cmd = new AbortMultipartUploadCommand({
          Bucket:   bucket,
          Key:      key,
          UploadId: upload
        });

        await this.client.send(cmd);

        /**
         * File is larger than the allowed maximum file size! */
        throw new Error('File limit reached');
      }

      /**
       * Check if the size of the chunk
       * is less than S3_SIZE_PART. */
      if (part === 0 && chunk.length < S3_SIZE_PART) {
        /**
         * We'll be using a single request to upload
         * the file instead of the multipart procedure. */
        const cmd = new PutObjectCommand({
          Key:    key,
          Bucket: bucket,

          ACL:         acl,
          Body:        chunk,
          ContentType: type,
        });

        await this.client.send(cmd);
        return;
      }

      /**
       * If we aren't flushing in a single chunk
       * we have to start the multipart upload. */
      if (!upload) {
        /**
         * Create start-multipart request
         * and set the upload variable. */
        const cmd = new CreateMultipartUploadCommand({
          Key:    key,
          Bucket: bucket,

          ACL:         acl,
          ContentType: type,
        });

        const res = await this.client.send(cmd);
        upload = res.UploadId;
      }

      ++part;
      const cmd = new UploadPartCommand({
        UploadId:   upload,
        Bucket:     bucket,
        Key:        key,

        Body:       chunk,
        PartNumber: part
      });

      const res = await this.client.send(cmd);
      parts.push({ PartNumber: part, ETag: res.ETag });
    }

    const cmd = new CompleteMultipartUploadCommand({
      Bucket:   bucket,
      Key:      key,
      UploadId: upload,
      MultipartUpload: {
        Parts: parts
      }
    });

    await this.client.send(cmd);
  }

  /**
   * Delete object from bucket
   *
   * @public
   * @param   {string} bucket
   * @param   {string} key
   * @returns {Promise<void>}
   */
  public async delete (bucket: string, key: string) : Promise<void>
  {
    const cmd = new DeleteObjectCommand({ Bucket: bucket, Key: key });
    await this.client.send(cmd);
  }
}
