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

import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = () => {
  const timeouts = useRef<number[]>([]);

  /**
   * Clear all timeouts once the component unmounts. */
  useEffect(() => () => {
    timeouts.current.forEach(id => clearTimeout(id));
    timeouts.current = [];
  }, []);

  /**
   * Return our custom setTimeout hook. */
  return useCallback((handler: CallableFunction, timeout: number, ...args: any[]) => {
    const id = window.setTimeout(() => {
      timeouts.current = timeouts.current.filter(t => t !== id);
      handler(...args);
    }, timeout);

    timeouts.current.push(id);

    /**
     * Return disposable
     * to cancel a timeout */
    return () => {
      clearTimeout(id);
      timeouts.current = timeouts.current.filter(t => t !== id);
    }
  }, []);
};
