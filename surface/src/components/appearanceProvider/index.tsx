/**
 * index.tsx
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
import { useMedia }                from '~/hooks/useMedia';
import { AppearanceContext }       from '~/contexts/appearance';
import { AppearanceProviderProps } from './types';

export const AppearanceProvider: FC<AppearanceProviderProps> = props => {
  /**
   * Get system defaults. */
  const darkMode      = useMedia('(prefers-color-scheme: dark)');
  const reducedMotion = useMedia('(prefers-reduced-motion: reduce)');

  /**
   * Apply values to the context. */
  const value = { darkMode: true, reducedMotion };
  return <AppearanceContext.Provider {...props} value={value} />;
};
