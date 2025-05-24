/**
 * filter.ts
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

import { FilterFn, StrictPick } from './types';

/**
 * Returns filtered object, this only
 * works on one level
 *
 * Example:
 * ```
 * const filtered = filter({ a: 1 ,b: 2 }, 'a');
 * ```
 *
 * @template T
 * @template K
 * @param  {T}         object
 * @param  {keyof T[]} keys
 * @return {StrictPick<T, K>}
 */
export const filter: FilterFn = <T, K extends keyof T>(object: T, ...keys: K[]) => {
  return keys.reduce((prev, key) => {
    if (object && Object.hasOwnProperty.call(object, key))
    {
      prev[key] = object[key];
    }

    return prev;
  }, {} as StrictPick<T, K>);
}
