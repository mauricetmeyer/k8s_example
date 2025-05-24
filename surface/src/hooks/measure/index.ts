/**
 * measure.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 *
 * (c) Laviréo. All rights reserved.
 */


import { useMemo, useState, RefObject } from 'react';
import { useIsomorphicLayoutEffect }    from 'react-use';
import { MeasureResult }                from './types';

export const useMeasure = <T extends HTMLElement>(ref: RefObject<T>, cb?: (width: number, height: number) => void) : MeasureResult => {
  const [ size, setSize ] = useState<MeasureResult>({ x: 0, y: 0, width: 0, height: 0 });

  /**
   * Create memoized observer */
  const observer = useMemo(() => new ResizeObserver(e => {
    window.requestAnimationFrame((): void | undefined => {
      if (e[0])
      {
        const { top, left }     = e[0].target.getBoundingClientRect();
        const { width, height } = e[0].contentRect;
        setSize({ width, height, x: left, y: top });
        ref.current && cb && cb(width, height);
      }
    });
  }), []);

  /**
   * Only run on element update. */
  useIsomorphicLayoutEffect (() => {
    /**
     * Make sure to only run
     * when an element is present. */
    if (!ref.current) return;

    /**
     * Subscribe observer to the current ref
     * and return disconnect function. */
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []); 

  return size;
}
