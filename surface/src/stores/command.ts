/**
 * command.ts
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

import { create } from 'zustand';
import Command from '~/types/command';

interface CommandStore
{
  contexts: Record<string, any>;
  commands: Command<any>[];

  setContext: (command: Command<any>, context: any) => void;
  addCommand(command: Command<any>) : void;
  removeCommand(command: Command<any>) : void;
}

export const useCommandStore = create<CommandStore>(set => ({
  contexts:      {},
  commands:      [],

  setContext:    (command, context) => set(s => ({ contexts: { ...s.contexts, [command.id]: context } })),
  addCommand:    (command: Command) => set(s => ({ commands: [ ...s.commands, command ] })),
  removeCommand: (command: Command) => set(s => ({ commands: s.commands.filter(c => c.id !== command.id) })),
}));
