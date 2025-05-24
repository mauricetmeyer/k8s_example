/**
 * flags.ts
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

import { ReactNode } from 'react';
import { create }    from 'zustand';

interface Flag {

}

interface FlagStore
{
  showFlag(value: Flag) : void;
  removeFlag(id: string) : void;
}

export const useFlagStore = create<FlagStore>(set => ({
  flags: [],
  showFlag: (value: Flag) => set(current => {
    return current;
  }),

  removeFlag: (id: string) => set(current => {
    return current;
  }),
}));
 