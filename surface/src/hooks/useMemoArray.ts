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

import { useMemo }  from 'react';

export const useMemoArray = (args: any[]) => {
  const len = args.length;
  const out = new Array(len);

  args.forEach((item, index) => {
    out[index] = item;
  });
  
  return useMemo(() => [...out].filter(item => item != null), [...out])
};
