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


import { useCallback, useState, MutableRefObject } from 'react';
import { FullscreenResult }                        from './types';

const exitFullscreen = () => (
  document.exitFullscreen ||
  document.msExitFullscreen ||
  document.mozCancelFullScreen ||
  document.webkitExitFullscreen
).call(document);

const enterFullscreen = (el: HTMLDivElement) => (
  el.requestFullscreen ||
  el.msRequestFullscreen ||
  el.mozRequestFullScreen ||
  el.webkitRequestFullscreen
).call(el);

const useFullscreen = (ref: MutableRefObject<any>) : FullscreenResult => {
  const [ state, setState ] = useState(false);

  const setFullscreen = useCallback((flag?: boolean) => {
    flag && ref.current ? enterFullscreen(ref.current) : exitFullscreen();
    setState(!!flag);
  }, [ref.current]);

  return [ state, setFullscreen ];
}

export default useFullscreen;

