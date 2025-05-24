/**
 * formatMoney.ts
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


interface NumberFormat {
  decimal:  string;
  thousand: string;
}

const formatNumber = (value: number, format: NumberFormat) => {
  const base    = '' + parseInt(value.toFixed(2), 10);
  const decimal = Math.abs(value).toFixed(2).split('.')[1];
  const mod     = base.length > 3 ? base.length % 3 : 0;

  return `${(mod ? `${base.slice(0, mod)}${format.thousand}` : '')}${base.slice(mod).replace(/(\d{3})(?=\d)/g, `$1${format.thousand}`)}${format.decimal}${decimal}`;
};

export default formatNumber;
