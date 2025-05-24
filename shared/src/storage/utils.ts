/**
 * utils.ts
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

import { StorageOptions } from './types';

export const parseUrl = (url: string) : StorageOptions => {
  const result = new URL(url);
  if (result.protocol !== 's3:') {
    /**
     * Protocol doesn't match what we expect. */
    throw new Error('Invalid protocol');
  }

  const { username, password } = result;
  if (!username || !password) {
    /**
     * Username or password is missing. */
    throw new Error('Must provide authentication parameters');
  }

  /**
   * Construct the options object. */
  const endpoint = `https://${result.hostname}`;
  return { key: username, secret: password, endpoint };
}
