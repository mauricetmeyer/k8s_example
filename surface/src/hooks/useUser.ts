/**
 * useUser.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * (c) Laviréo. All rights reserved.
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 */

import { useContext }  from 'react';
import { UserContext } from '~/contexts/user';

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
  {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
