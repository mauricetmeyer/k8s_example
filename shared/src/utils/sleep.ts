/**
 * sleep.ts
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

/**
 * Sleep until timeout is done.
 *
 * Example:
 * ```
 * doSomething();
 * await sleep(1000);
 * ```
 *
 * @param  {Number} ms
 * @return {Promise<void>}
 */
export const sleep = (ms: number) : Promise<void> => new Promise(res => setTimeout(res, ms));
