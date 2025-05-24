/**
 * useEvent.ts
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

import { useEffect } from 'react';

export interface EventFn<T>
{
  (event: T) : void;
}

/**
 * Hook that attaches to an event.
 *
 * @param {string}     eventType
 * @param {EventFn<T>} callback
 * @param {boolean}    attached
 */
export const useEvent = <K extends keyof WindowEventMap> (eventType: K, callback: EventFn<WindowEventMap[K]>, attached = true) =>
  useEffect(() => {
    if (attached) window.addEventListener(eventType, callback)
    else window.removeEventListener(eventType, callback);
    return () => window.removeEventListener(eventType, callback);
  }, [eventType, callback, attached]);
