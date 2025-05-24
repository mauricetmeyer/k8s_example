/**
 * sync.ts
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

import { Colors } from '~/const/colors';

export const StripeElementsProps = {
  style: {
    base: {
      color:           Colors.black,
      fontSize:        '14px',
      fontWeight:      '500',
      lineHeight:      '24px',
      fontFamily:      '-apple-system, "Source Sans Pro", roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSmoothing:   'antialiased',
      '::placeholder': {
        color: Colors.grey,
      }
    }
  }
};
