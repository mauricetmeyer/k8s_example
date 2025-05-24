/**
 * env.ts
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

import dotenv from 'dotenv';

/**
 * Populate from .env if available */
dotenv.config();

export class Environment {
  /**
   * Get variables from the .env file when developing,
   * or the environment itself.
   *
   * @param  {string}      key
   * @param  {string|null} fallback
   * @return {string}
   */
  public static str (key: string, fallback: null) : string | undefined;
  public static str (key: string, fallback?: string) : string;
  public static str (key: string, fallback?: string | null) : string | undefined
  {
    /**
     * We couldn't find any value in the environment,
     * next we'll try the .env file. */
    const value = process.env[key] ?? fallback;
    if (value === undefined)
    {
      throw new TypeError(`Missing environment variable ${key}`);
    }

    return value ?? undefined;
  }

  /**
   * Get variables from the .env file when developing,
   * or the environment itself.
   *
   * @param  {string}      key
   * @param  {string|null} fallback
   * @return {number}
   */
  public static int (key: string, fallback: null) : number | undefined;
  public static int (key: string, fallback?: number) : number;
  public static int (key: string, fallback?: number | null) : number | undefined
  {
    /**
     * We couldn't find any value in the environment,
     * next we'll try the .env file. */
    const value  = Environment.str(key, String(fallback));
    const parsed = parseInt(value);
    if (isNaN(parsed))
    {
      throw new TypeError(`Environment variable ${key} is not a number`);
    }

    return parsed ?? undefined;
  }
}
