/**
 * useMedia.ts
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


import { useState, useEffect } from 'react';

export const useMedia = (query: string) : boolean => {
  const [ state, setState ] = useState(false);
  useEffect(() => {
    const mediaQuery    = window.matchMedia(query);
    const handleChange = (ev: any) => setState(ev.matches);
    mediaQuery.addEventListener('change', handleChange);
    setState(mediaQuery.matches);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);
  return state;
}
