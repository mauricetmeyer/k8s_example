/**
 * fletcher.ts
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

export const getFletcher16 = (value: Buffer) : number => {
  let sum0 = 0;
  let sum1 = 0;

  for (let i = 0; i < value.length; i++) {
    sum0 = (sum0 + value[i]) % 255;
    sum1 = (sum1 + sum0) % 255;
  }

  return (sum1 << 8) | sum0;
}