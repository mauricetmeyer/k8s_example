/**
 * shortcuts.ts
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


import { create } from 'zustand';

type ShortcutHandler = (ev: KeyboardEvent) => void;
interface ShortcutsStore
{
  isEnabled: boolean;
  shortcuts: Record<string, ShortcutHandler>;

  bind (shortcut: string, handler: ShortcutHandler) : void
  unbind (shortcut: string, handler: ShortcutHandler) : void
}

export const useShortcutsStore = create<ShortcutsStore>(set => ({
  shortcuts: {},
  isEnabled: true,

  bind: (shortcut: any, handler: ShortcutHandler) => set(state => ({ ...state, shortcuts: { ...state.shortcuts, [shortcut]: handler } })),
  unbind: (shortcut: any, handler: ShortcutHandler) => set(state => ({ ...state, shortcuts: { ...state.shortcuts, [shortcut]: undefined } })),
  setIsEnabled: (isEnabled: boolean) => set(state => ({ ...state, isEnabled })),
}));
