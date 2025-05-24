/**
 * index.ts
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

import { useCallback }    from 'react';
import { Money }          from '~/const/format';
import Currencies         from '~/const/currencies';
import formatNumber       from '~/utils/formatMoney';
import { useLocaleStore } from '~/stores/locale';

export const useLocale = () : string => {
  const locale = useLocaleStore(s => s.locale);
  return locale;
};

export const useMoney = () : (v: number, c: string) => string => {
  const locale = useLocale();
  return useCallback((value: number, currency: string) => {
    const round          = Math.round(value) === value;
    const moneyFormat    = Money[locale] || Money['en'];
    const currencyFormat = Currencies.find(c => c.code === currency);
    if (!currencyFormat) {
      throw new Error(`Currency ${currency} is not supported.`);
    }

    const { format, ...numberFormat } = moneyFormat;
    const realFormat     = value < 0 ? `\u2212${format}` : format;
    const valueFormatted = formatNumber(value, numberFormat);
    return realFormat.replace('%s', currencyFormat.unicode).replace('%v', valueFormatted);
  }, [locale]);
};

export const useMessage = (key: string) : string => {
  const locale = useLocale();
  return key;
};

