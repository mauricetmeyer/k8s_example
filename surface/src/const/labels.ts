/**
 * labels.ts
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

export const LabelColors: Record<string, Record<string, [string, string]>> = {
  dark: {
    red: [Colors.red500, Colors.red800],
    grey: [Colors.gray200, Colors.gray700],
    green: [Colors.green500, Colors.green900],
    blue: [Colors.blue400, Colors.blue800],
    yellow: [Colors.yellow500, Colors.yellow900]
  },

  light: {
    red: [Colors.red500, Colors.red100],
    grey: [Colors.gray500, Colors.gray100],
    green: [Colors.green500, Colors.green100],
    blue: [Colors.blue400, Colors.blue100],
    yellow: [Colors.yellow500, Colors.yellow100]
  }
}