/**
 * useAppearance.ts
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

import { useContext }                                from 'react';
import { AppearanceContext, AppearanceContextProps } from '~/contexts/appearance';

export const useAppearance = () : AppearanceContextProps => {
  const appearance = useContext(AppearanceContext);
  if (!appearance)
  {
    throw new Error('useAppearance must be used within AppearanceProvider');
  }

  return appearance;
};
