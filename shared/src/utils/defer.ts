/**
 * defer.ts
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

import { DeferFn } from './types';

/**
 * Creates a Promise that exposes the resolve and reject functions.
 *
 * Example:
 *
 * ``
 * const d = defer<boolean>();
 * d.resolve(true);
 * ``
 *
 * @template T
 * @return {Deferred<T>}
 */
export const defer: DeferFn = <T>() => {
  let methods;
  const promise = new Promise<T>((resolve, reject) => {
    methods = { resolve, reject };
  });

  /**
   * Assign methods to the promise */
  return Object.assign(promise, methods);
}
