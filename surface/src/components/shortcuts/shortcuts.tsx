/**
 * shortcuts.tsx
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * Copyright (c) Laviréo. All rights reserved.
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 */

import { FC }                      from 'react';
import { useEvent }                from '~/hooks/useEvent';
import { useShortcutsStore }       from '~/stores/shortcuts';
import { getKeyInfo, getModifier } from './utils';

export const Shortcuts: FC = () => {
  const [shortcuts, isEnabled] = useShortcutsStore(s => [s.shortcuts, s.isEnabled]);

  useEvent('keydown', (ev: KeyboardEvent) => {
    /**
     * Identifier modifier keys */
    const modifier = getModifier(ev);

    /**
     * Only loop over commands that
     * actually have a keyboard shortcut. */
    for (const [shortcut, handler] of Object.entries(shortcuts))
    {
      if (!handler)
      {
        /**
         * This can happen if we previously had a shortcut
         * set but now it's been removed. */
        continue;
      }

      /**
       * Break out of the loop
       * when defaultPrevent() was called. */
      if (ev.defaultPrevented)
      {
        break;
      }

      /**
       * Check if handler keys match the keyboard event. */
      const keyInfo = getKeyInfo(shortcut);
      if (ev.key.toLowerCase() === keyInfo.key && modifier.sort().join(',') === keyInfo.modifier.sort().join(','))
      {
        handler(ev);
      }
    }
  }, isEnabled);

  return null;
};
