/**
 * measure.ts
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

import { MeasureFn } from './types';

/**
 * Start a timer than measures time
 *
 * Example:
 * ```
 * const time = measure(async () => {
 *   await Promise.all([doSomething(), sleep(1000)]);
 * })
 * ```
 *
 * @return {MeasureFn}
 */
export const measure = (fn: MeasureFn) : Promise<bigint> => {
  const start = process.hrtime.bigint();
  return fn().then(() => process.hrtime.bigint() - start);
};
