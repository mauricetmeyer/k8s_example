/**
 * command.tsx
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

import { ReactChild, ReactElement } from 'react';
import CommandCategory              from '~/const/categories';

interface CommandValue<T, K>
{
  (context: T) : K;
}

export default interface Command<T = void> {
  id:          string;

  shortcut?:   string;
  keywords?:   string[];
  category?:   CommandCategory;

  disabled?:   boolean;
  keepOpen?:   boolean;
  searchable?: boolean;

  text:        string;
  icon:        CommandValue<T, ReactChild | null>;
  label:       CommandValue<T, ReactChild>;
  widget?:     CommandValue<T, ReactElement>;

  commands?:   CommandValue<T, Command[]>;

  onClose?:    (context: T) => void;
  onExecute?:  (context: T) => void;
}