/**
 * currencies.ts
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

interface Currency {
  code:    string;
  name:    string;
  unicode: string;
}

const Currencies: Currency[] = [
  {
    name:    'United States Dollar',
    code:    'USD',
    unicode: '\u0024',
  },
  {
    name:    'Britsh Pound',
    code:    'GBP',
    unicode: '\u00A3',
  },
  {
    name:    'Canadian Dollar',
    code:    'CAD',
    unicode: '\u0024',
  },
  {
    name:    'Australian Dollar',
    code:    'AUD',
    unicode: '\u0024',
  },
  {
    name:    'Danish Krone',
    code:    'DKK',
    unicode: '\u006B\u0072',
  },
  {
    name:    'Norwegian Krone',
    code:    'NOK',
    unicode: '\u006B\u0072',
  },
  {
    name:    'Swedish Krona',
    code:    'SEK',
    unicode: '\u006B\u0072',
  },
  {
    name:    'Euro',
    code:    'EUR',
    unicode: '\u20AC',
  },
  {
    name:    'Swiss Franc',
    code:    'CHF',
    unicode: '\u0043\u0048\u0046',
  },
  {
    name:    'Bitcoin',
    code:    'BTC',
    unicode: '\u0042\u0054\u0043',
  },
  {
    name:    'Litecoin',
    code:    'LTC',
    unicode: '\u004C\u0054\u0043',
  },
  {
    name:    'Ethereum',
    code:    'ETH',
    unicode: '\u0045\u0054\u0048\u0048',
  }
];

export default Currencies;
