/**
 * request.ts
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

import { ServerResponse }       from 'http';
import { serialize }            from 'cookie';
import { ServiceError }         from '~/utils/errors';
import { Cookie, WriteonlyMap } from './types';
import { Stream } from 'stream';

export class Response
{
  private handle: ServerResponse;

  /**
   * Request constructor.
   *
   * @param {ServerResponse} handle
   */
  constructor(handle: ServerResponse)
  {
    this.handle = handle;
  }

  public encodeError (error: ServiceError)
  {
    const { code, message } = error;
    return this.encode(400, 'application/json', JSON.stringify({ code, message }));
  }

  public encodeJson (data: unknown)
  {
    this.encode(200, 'application/json', JSON.stringify(data));
  }


  /**
   * Return request header. */
  public get header () : WriteonlyMap<string, string | number>
  {
    return {
      set: (key, value) => this.handle.setHeader(key, value)
    }
  }

  public get cookie () : WriteonlyMap<string, Cookie>
  {
    return {
      set: (key, { value, ...options }) => {
        const cookie = serialize(key, `${value}`, options)
        this.handle.setHeader('set-cookie', cookie);
      }
    }
  }

  public encode (code: number, type: string, data: string | Buffer | Uint8Array | Stream)
  {
    /**
     * Set status code and send response. */
    this.handle.statusCode = code;
    this.header.set('content-type', type);

    /**
     * In cases where the body is a stream
     * we will pipe it right to the response. */
    if (data instanceof Stream)
    {
      data.pipe(this.handle);
      return;
    }

    this.header.set('content-length', Buffer.byteLength(data));
    this.handle.end(data);
  }
}
