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

interface SettingsStore
{
  isOpen: boolean;

  open () : void
  close () : void
}

export const useSettingsStore = create<SettingsStore>(set => ({
  isOpen: true,

  open: () => set(state => ({ ...state, isOpen: true })),
  close: () => set(state => ({ ...state, isOpen: false }))
}));
