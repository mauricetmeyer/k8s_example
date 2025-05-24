/**
 * utils.ts
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

import { Aliases }  from '~/const/aliases';
import { Modifier } from '~/const/modifier';

export const isModifier = (key: string) => Modifier.indexOf(key) !== -1;
export const getModifier = (ev: KeyboardEvent) => {
  const modifier: string[] = [];
  if (ev.altKey) {
    modifier.push('Alt')
  }

  if (ev.ctrlKey) {
    modifier.push('Ctrl')
  }

  if (ev.metaKey) {
    modifier.push('Meta')
  }

  return modifier;
}

export const getKeyInfo = (combo: string) => {
  let key = '';
  const keys:     string[] = combo.split('+');
  const modifier: string[] = [];
  keys.forEach((k) => {
    /**
     * Normalize key name, if needed and
     * add the key to modifiers or set as key. */
    k = Aliases[k] ? Aliases[k] : k;
    isModifier(k) ? modifier.push(k) : (key = k.toLowerCase());
  });

  return { key, modifier };
}
