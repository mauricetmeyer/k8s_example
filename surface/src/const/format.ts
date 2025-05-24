/**
 * format.ts
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

interface MoneyFormat {
  format:   string;
  decimal:  string;
  thousand: string;
}

export const Money: Record<string, MoneyFormat> = {
  at: {
    format:   '%v\xa0%s',
    decimal:  ',',
    thousand: '.'
  },
  de: {
    format:   '%v\xa0%s',
    decimal:  ',',
    thousand: '.'
  },
  en: {
    format:   '%s%v',
    decimal:  '.',
    thousand: ','
  },
  es: {
    format:   '%v\xa0%s',
    decimal:  ',',
    thousand: '.'
  },
  fr: {
    format:   '%v\xa0%s',
    decimal:  ',',
    thousand: '\xa0'
  },
  it: {
    format:   '%v\xa0%s',
    decimal:  ',',
    thousand: '.'
  }
}