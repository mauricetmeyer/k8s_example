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


import { useEffect, useCallback, useRef, RefObject } from 'react';
import { BlurFn }                                    from './types';

const useBlur = <T extends HTMLElement>(ref: RefObject<T>, fn: BlurFn, attached = true) : void => {
  /**
   * Memoized callback */
  const handleClick = useCallback((ev: MouseEvent) => {
    const { current } = ref;

    /**
     * The event target is either the ref
     * or a child. */
    if (!current || current === ev.target || current.contains(ev.target as Node))
    {
      return;
    }

    /**
     * Fire the blur event! */
    ev.stopPropagation();
    fn && fn();
    return false;
  }, [fn]);

  /**
   * Add hooks that attach the event handlers on the document
   * that are used for the onBLur detection. */
  useEffect(() => {
    if (attached) document.addEventListener('click', handleClick)
    else document.removeEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [attached]);
};

export default useBlur;

