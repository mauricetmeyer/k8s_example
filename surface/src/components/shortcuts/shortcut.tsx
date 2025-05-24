/**
 * shortcut.tsx
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

import { FC, useCallback, useEffect } from 'react';
import { useShortcutsStore }          from '~/stores/shortcuts';
import { isTextInput }                from '~/utils/isTextInput';
import { ShortcutProps }              from './types';

export const Shortcut: FC<ShortcutProps> = ({ disabled, shortcut, onShortcut, allowsInput }) => {
  const [ bind, unbind ] = useShortcutsStore(s =>  [s.bind, s.unbind]);
  const handleShortcut   = useCallback((ev: KeyboardEvent) => {
    /**
     * Check if element that issues
     * the event is actually an input element */
    const isInput = isTextInput(ev.target as HTMLElement);

    /**
     * Only run handler when no input is focues or
     * the shortcut explicitely allows it. */
    if (!isInput || allowsInput)
    {
      ev.preventDefault();
      onShortcut(ev);
    }
  }, [onShortcut, allowsInput]);

  useEffect(() => {
    !disabled && bind(shortcut, handleShortcut);
    return () => unbind(shortcut, handleShortcut);
  }, [disabled, shortcut, handleShortcut]);
  return null;
};
