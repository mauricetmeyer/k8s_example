/**
 * cache.ts
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

export type CacheFn = () => Promise<any>;
export class Cache
{
  constructor(private url: string)
  {
    /**
     * Nothing... */
  }


  /**
   * Connect to redis.
   *
   * @returns {Promise<Cache>}
   */
  public async connect () : Promise<Cache>
  {
    return this;
  }


  /**
   * Get a value from the cache, this will
   * use fallback in case the it's a miss.
   *
   * @param {string}  key
   * @param {CacheFn} fallback
   * @param {number}  ttl
   * @returns {Promise<any>}
   */
  public async get (key: string, fallback: CacheFn, ttl?: number) : Promise<any>
  {

  }

  /**
   * Delete a value from the cache.
   *
   * @param {string} key
   */
  public async del (key: string) : Promise<void>
  {

  }
}
