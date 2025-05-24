/**
 * index.ts
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

import { TimeoutFn, RetryableFn } from './types';
export * as random                from './random';
export { defer }                  from './defer';
export { sleep }                  from './sleep';
export { filter }                 from './filter';
export { measure }                from './measure';
export { sanitize }               from './sanitize';

/**
 * This function will retry until it succeeds or *tries*
 * are hit.
 *
 * Example:
 * ```
 * await withRetries<void>(async () => {
 *   await Promise.all([doSomething(), sleep(10000)]);
 * }, 10);
 * ```
 *
 * @param  {RetryableFn} fn
 * @param  {Number}      tries
 * @return {Promise<T>}
 */
 const withRetries = async <T>(fn: RetryableFn<T>, tries = 7) : Promise<T> => {
  /**
   * We'll try again... n again! */
  for (let i = 0; i < tries; i++)
  {
    try
    {
      /**
       * Call function and wrap it in a promise
       * so that we can handle normal and async functions alike. */
      return await fn();
    }
    catch (err)
    {
      /**
       * @NOTE (Maurice):
       * Decide what to do when a try fails.
       * Maybe a delay? */
    }
  }

  /**
   * Sorry, you're out of tries.
   * Maybe you have better luck the next time! */
  throw new Error('Out of retries!');
}

/**
 * Wait until promise is resolved or failed,
 * with the extra of being able to set a timeout.
 * 
 * Example:
 * ```
 * await withTimeout<void>(async () => {
 *   await Promise.all([doSomething(), sleep(10000)]);
 * }, 1000);
 * ```
 * 
 * @param {UntilFn} fn 
 * @param {Number}  timeout
 */
const withTimeout = <T>(fn: TimeoutFn<T>, timeout?: number) : Promise<T> => {
  if (!timeout) return fn();

  const counter = new Promise<T>((_, r) => setTimeout(() => r('Promise timed out'), timeout));
  return Promise.race([fn(), counter]);
}

export { withRetries, withTimeout };
