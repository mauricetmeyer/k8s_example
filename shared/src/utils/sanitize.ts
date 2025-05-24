/**
 * sanitize.ts
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

interface Sanitizer<T>
{
  validate?: (value: T) => void;
  transform?: (value: T) => T;
}

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
 * @param  {keyof T[]} sanitizers
 * @return {StrictPick<T, K>}
 */
export const sanitize = <T>(object: T, sanitizers: { [P in keyof T]?: Sanitizer<T[P]> }) : T => {
  let key: keyof T;
  for (key in object)
  {
    /**
     * Check if a sanitizer exists for the specified key */
    if (Object.hasOwnProperty.call(object, key) && sanitizers[key])
    {
      /**
       * @TODO (Maurice):
       * Implement sanitizer logic. */
    }
  }

  return object;
}
