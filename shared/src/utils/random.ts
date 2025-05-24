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


import { randomBytes, randomFillSync }   from 'crypto';
import config            from '~/config';
import { getFletcher16 } from './fletcher';

const HOST_BUF      = Buffer.from(config.hostname);
const MACHINE_ID    = getFletcher16(HOST_BUF);

const RANDOM_BASE62 = Buffer.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
const RANDOM_BASE36 = Buffer.from('abcdefghijklmnopqrstuvwxyz0123456789');

const RANDOM_CREATE = (chars: Buffer) => {
  return (len: number) : string => {
    /**
     * Generate buffer of random bytes,
     * and an empty buffer to store the result. */
    const buf    = randomBytes(len);
    const result = Buffer.alloc(len);

    /**
     * Loop through the buffer and convert each byte
     * to a character from the charset. */
    while(len--) {
      result[len] = chars[buf[len] % chars.length];
    }

    /**
     * Return the result as a string. */
    return result.toString('ascii');
  };
};


/**
 * Generate a random string (a-zA-Z0-9).
 * 
 * Example:
 * ``
 * ``
 *
 * @param  {Number} len
 * @return {String}
 */
export const string = RANDOM_CREATE(RANDOM_BASE62);

/**
 * Generate a random string (a-z0-9).
 * 
 * Example:
 * ``
 * ``
 *
 * @param  {Number} len
 * @return {String}
 */
export const stringLower = RANDOM_CREATE(RANDOM_BASE36);

/**
 * Generate a random string (A-Z0-9).
 * 
 * Example:
 * ``
 * ``
 *
 * @param  {Number} len
 * @return {String}
 */
export const stringUpper = (len: number) : string =>
  stringLower(len).toUpperCase();

export const bytes = (len: number) : Buffer => {
  const buf = Buffer.allocUnsafe(len);
  return randomFillSync(buf);
}

export const id = (prefix: string, len: number) : string => {
  /**
   * Allocate buffer for the ID. */
  let   off = 0;
  const buf = Buffer.alloc(len);

  /**
   * Machine part */
  buf[off++] = RANDOM_BASE62[MACHINE_ID % RANDOM_BASE62.length];
  buf[off++] = RANDOM_BASE62[((MACHINE_ID / 3) | 0) % RANDOM_BASE62.length];

  /**
   * Time part */
  let delta = Date.now() - config.epoche;
  const timeEnd = off + config.timelen;
  for (; off < timeEnd; off++)
  {
    buf[off] = RANDOM_BASE62[delta % RANDOM_BASE62.length];
    delta = Math.floor(delta / RANDOM_BASE62.length);
  }

  /**
   * Random part */
  let remainder = len - off;
  const randomBytes = bytes(remainder);

  while (remainder--)
  {
    buf[off++] = RANDOM_BASE62[randomBytes[remainder] % RANDOM_BASE62.length];
  }

  /**
   * Prefix and return as string */
  return `${prefix}_${buf.toString('ascii')}`;
}
