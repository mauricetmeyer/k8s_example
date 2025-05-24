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


import { useMemo } from 'react';

/**
 * Hooks for easy channel attachment
 *
 * @template T
 * @return {Record<string, string>}
 */
const useCookies = () : Record<string, string> => useMemo(() => {
  const cookies: Record<string, string> = {};
  document.cookie.split('; ').forEach(cookie => {
    const [ key, value ] = cookie.split('=', 2);
    cookies[key] = value;
  });

  return cookies;
}, [document.cookie]);

export default useCookies;
