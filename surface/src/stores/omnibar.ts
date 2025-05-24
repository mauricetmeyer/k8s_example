/**
 * identity.ts
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

import { create }  from 'zustand';
import { produce } from 'immer';

interface OmnibarStore
{
  filter:    string;
  parent?:   string;
  isOpen:    boolean;

  setIsOpen: (isOpen: boolean, props?: any) => void;

  setFilter: (filter: string) => void;
  setParent: (parent?: { id: string }) => void;
}

export const useOmnibarStore = create<OmnibarStore>(set => ({
  filter:    '',
  isOpen:    false,

  setIsOpen: (isOpen, props = {}) => set(
    produce((state: OmnibarStore) => {
      state.isOpen = isOpen;
      state.filter = props.filter  ?? '';
      state.parent = props.parent?.id ?? undefined;
    })
  ),

  setFilter: filter => set({ filter }),
  setParent: parent => set({ filter: '', parent: parent?.id })
}));
