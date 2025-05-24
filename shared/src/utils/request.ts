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

import { IncomingMessage } from 'node:http';
import { parse }           from 'cookie';
import getRawBody          from 'raw-body';
import { Message }         from 'protobufjs';
import { Ctor }            from '~/types';
import { handleException } from '~/utils/sentry';
import { InputError }      from '~/utils/errors';

export class Request
{
  private handle:       IncomingMessage;
  private urlCache?:    URL;
  private bodyCache?:   Promise<Buffer>;
  private headerCache?: Map<string, string | undefined>;
  private cookieCache?: Map<string, string | undefined>;

  /**
   * Request constructor.
   *
   * @param {IncomingMessage} handle
   */
  constructor(handle: IncomingMessage)
  {
    this.handle = handle;
  }

  /**
   * Get WHATWG parsed URL.
   * Lazily memoized.
   *
   * @returns {URL}
   */
  public get url () : URL | undefined
  {
    if (!this.urlCache)
    {
      try
      {
        this.urlCache = new URL(this.handle.url ?? '/', this.origin);
      }
      catch
      {
        this.urlCache = Object.create(null);
      }
    }

    return this.urlCache;
  }

  public get path () : string
  {
    return this.url?.pathname ?? '/';
  }

  public get json () : Promise<unknown>
  {
    return this.body
      .then(buffer => JSON.parse(buffer.toString('utf8')))
      .catch(() => ({}));
  }

  public get body () : Promise<Buffer>
  {
    this.bodyCache ??= getRawBody(this.handle, { limit: '5mb' })
    return this.bodyCache;
  }

  /**
   * Parse the "Host" header field host
   * and support X-Forwarded-Host when a
   * proxy is enabled.
   *
   * @returns {string}
   */
  public get host () : string
  {
    const proxy = this.header.get('x-forwarded-host');
    const host  = proxy ?? this.header.get('host');
    if (!host || typeof host !== 'string') return '0.0.0.0';
    return host.split(/\s*,\s*/)[0];
  }

  /**
   * Get origin of URL.
   *
   * @returns {string}
   */
  public get origin () : string
  {
    return `${this.protocol}://${this.host}`;
  }

  /**
   * Get request method.
   *
   * @returns {string}
   */
  public get method () : string
  {
    return this.handle.method ?? 'GET';
  }

  /**
   * Return request header.
   *
   * @returns {ReadonlyMap<string, string | undefined>}
   */
  public get header () : ReadonlyMap<string, string | undefined>
  {
    if (!this.headerCache) {
      this.headerCache = new Map();
      for (const [key, value] of Object.entries(this.handle.headers)) {
        if (value !== undefined) {
          // Node/Express headers can be an array or a single value. We join
          // multi-valued headers with `, ` just like the Fetch API's `Headers`
          // does. We assume that keys are already lower-cased (as per the Node
          // docs on IncomingMessage.headers) and so we don't bother to lower-case
          // them or combine across multiple keys that would lower-case to the
          // same value.
          this.headerCache.set(key, Array.isArray(value) ? value.join(', ') : value);
        }
      }
    }

    return this.headerCache;
  }

  /**
   * Return request header.
   *
   * @returns {ReadonlyMap<string, string | undefined>}
   */
  public get cookie () : ReadonlyMap<string, string | undefined>
  {
    if (!this.cookieCache) {
      this.cookieCache = new Map();

      const header  = this.header.get('cookie');
      const cookies = parse(header ?? '');
      for (const [key, value] of Object.entries(cookies)) {
        if (value !== undefined) {
          this.cookieCache.set(key, value);
        }
      }
    }

    return this.cookieCache;
  }

  /**
   * Returns the protocol string "http" or "https"
   * when requested with TLS. When the proxy setting
   * is enabled the "X-Forwarded-Proto" header
   * field will be trusted.
   *
   * @return {string}
   */
  public get protocol () : string
  {
    const proto = this.header.get('x-forwarded-proto') ?? 'http';
    if (typeof proto !== 'string')
    {
      return 'http';
    }

    return proto.split(/\s*,\s*/)[0];
  }
}
