/**
 * colors.ts
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

import { Color } from '~/utils/color';

export const Colors: Record<string, string> = {
  gray0:    'rgb(255,255,255)',
  gray50:   'rgb(246,248,250)',
  gray100:  'rgb(223,228,237)',
  gray200:  'rgb(189,194,209)',
  gray300:  'rgb(161,167,186)',
  gray400:  'rgb(135,142,162)',
  gray500:  'rgb(107,114,134)',
  gray600:  'rgb(77,84,102)',
  gray700:  'rgb(62,67,83)',
  gray800:  'rgb(45,50,65)',
  gray900:  'rgb(24,28,36)',
  gray950:  'rgb(16,18,24)',

  blue50:  'rgb(221, 255, 254)',
  blue100: 'rgb(207, 245, 246)',
  blue200: 'rgb(120, 200, 232)',
  blue300: 'rgb(60, 185, 239)',
  blue400: 'rgb(35, 150, 237)',
  blue500: 'rgb(5, 112, 222)',
  blue600: 'rgb(0, 85, 188)',
  blue700: 'rgb(3, 67, 142)',
  blue800: 'rgb(1, 50, 96)',
  blue900: 'rgb(1, 28, 58)',

  red50:  'rgb(255, 245, 246)',
  red100: 'rgb(255, 224, 229)',
  red200: 'rgb(255, 190, 203)',
  red300: 'rgb(255, 124, 151)',
  red400: 'rgb(255, 78, 115)',
  red500: 'rgb(252, 1, 78)',
  red600: 'rgb(206, 20, 70)',
  red700: 'rgb(161, 26, 62)',
  red800: 'rgb(93, 29, 50)',
  red900: 'rgb(59, 29, 42)',

  green50:  'rgb(232, 242, 238)',
  green100: 'rgb(202, 243, 232)',
  green200: 'rgb(174, 238, 219)',
  green300: 'rgb(114, 226, 197)',
  green400: 'rgb(10, 214, 173)',
  green500: 'rgb(30, 192, 150)',
  green600: 'rgb(0, 145, 114)',
  green700: 'rgb(0, 111, 87)',
  green800: 'rgb(0, 78, 67)',
  green900: 'rgb(17, 45, 46)',

  yellow50:  'rgb(255, 252, 244)',
  yellow100: 'rgb(255, 246, 222)',
  yellow200: 'rgb(255, 234, 177)',
  yellow300: 'rgb(255, 216, 109)',
  yellow400: 'rgb(255, 207, 75)',
  yellow500: 'rgb(255, 195, 30)',
  yellow600: 'rgb(207, 159, 28)',
  yellow700: 'rgb(171, 133, 28)',
  yellow800: 'rgb(99, 79, 26)',
  yellow900: 'rgb(51, 44, 25)',


  black:    '#1A202C',
  dark:     '#545A69',
  grey:     '#6A7383',
  hover:    '#f2f3f4',
  focus:    '#edeff0',
  white:    '#FFF',

  red:      '#FA3C3C',
  blue:     '#0052CC',
  green:    '#1EC08C',
  orange:   '#FF8B00',
  yellow:   '#FFC31E',
  brand:    '#EC6CA0',

  redLight:       Color.fromHex('#FA3C3C').setAlpha(0.2).rgba,
  blueLight:      Color.fromHex('#0052CC').setAlpha(0.2).rgba,
  greenLight:     Color.fromHex('#1EC08C').setAlpha(0.2).rgba,
  orangeLight:    Color.fromHex('#FF8B00').setAlpha(0.2).rgba,
  yellowLight:    Color.fromHex('#FFC31E').setAlpha(0.2).rgba,

  scrollbar:      Color.fromHex('#545A69').setAlpha(0.5).rgba,
  scrollbarHover: Color.fromHex('#545A69').setAlpha(0.8).rgba,
};
