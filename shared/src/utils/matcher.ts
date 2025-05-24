/**
 * matcher.ts
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

import { exec, match, parse } from 'matchit';

export type Match<T> = {
  params:  Record<string, string>;
  handler: T
}

/**
 * Matcher class
 *
 * @template T
 */
export class Matcher<T>
{
  private routes:   Record<string, any[]>          = {};
  private handlers: Record<string, Map<string, T>> = {};

  /**
   * Add a new command
   *
   * @param {string} method
   * @param {string} path
   * @param {T}      fn
   */
  public add (method: string, path: string, fn: T) : void
  {
    this.routes[method] ??= [];
    this.handlers[method] ??= new Map();

    const parsed = parse(path);
    this.routes[method].push(parsed);
    this.handlers[method].set(path, fn);
  }

  /**
   * Resolve cmd to route
   *
   * @param  {string} method
   * @param  {string} path
   * @return {Match<T>}
   */
  public resolve (method: string, path: string) : Match<T> | undefined
  {
    const arr = match(path, this.routes[method] || []);
    return arr.length === 0 ? undefined : {
      params:  exec(path, arr) || {},
      handler: this.handlers[method].get(arr[0].old) as T
    };
  }
}