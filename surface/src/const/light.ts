/**
 * light.ts
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

export const Light: Record<string, string> = {
  radiusS:             '4px',
  radiusM:             '8px',
  radiusL:             '20px',

  border:       Colors.gray100,

  backgroundDefault:   Colors.gray0,
  backgroundAlternate: Colors.gray50,
  backgroundCard:      Colors.gray0,
  backgroundHighlight: Colors.gray0,
  backgroundOverlay:   `rgba(255, 255, 255, .75)`,

  typographyPrimary:            Colors.gray950,
  typographySecondary:          Colors.gray500,
  typographyPlaceholder:        Colors.gray300,
  typographyInvalid:            Colors.red500,
  typographyInvalidSecondary:   Colors.red300,
  typographyHighlight:          Colors.green500,
  typographyHighlightSecondary: Colors.green300,

  inputBackgroundDefault:   Colors.gray50,
  inputBackgroundDisabled:  Colors.gray50,
  inputPlaceholderDefault:  Colors.gray300,
  inputPlaceholderInvalid:  Colors.gray300,
  inputPlaceholderDisabled: Colors.gray200,
  inputBorderDefault:       Colors.gray50,
  inputBorderFocus:         Colors.gray100,
  inputBorderInvalid:       Colors.red300,
  inputBorderDisabled:      Colors.gray50,

  toggleBackgroundDefault:   Colors.gray100,
  toggleBackgroundActive:    Colors.green300,
  toggleBackgroundPin:       Colors.gray0,
  
  buttonBackgroundPrimary:   Colors.gray950,
  buttonBackgroundSecondary: Colors.gray100,
  buttonBackgroundDisabled:  Colors.gray100,
  buttonColorPrimary:        Colors.gray0,
  buttonColorSecondary:      Colors.gray950,
  buttonColorDisabled:       Colors.gray400,

  scrollbarBackgroundDefault: Colors.gray100,
  scrollbarBackgroundHover: Colors.gray200,

  omnibarOverlay: 'rgba(0, 0, 0, 0.4)',
  omnibarBackground: Colors.gray0,

  avatarBackground: Colors.gray200,
  avatarColor:      Colors.gray900,

  navigationBackground: Colors.gray50,
  navigationColorDefault: Colors.gray700,
  navigationColorHover: Colors.gray700,
  navigationColorActive:  Colors.green950,
  navigationBackgroundDefault: Colors.gray50,
  navigationBackgroundHover: Colors.gray100,
  navigationBackgroundActive:  Colors.gray100,

  sidepaneBorder: Colors.gray50,

  boardItemBackground: Colors.gray0,
  boardGroupBackground: Colors.gray50,

  labelBackground: Colors.gray100,
  labelColor:      Colors.gray800,

  tableItemBackgroundActive: Colors.gray50,
  tableCellBackgroundActive: Colors.gray100,
  tableColumnBackground: Colors.gray0,

  listItemBorder: Colors.gray50,
  listItemBackgroundDefault: Colors.gray0,
  listItemBackgroundActive: Colors.gray50,

  getStartedBackground: Colors.gray50,
  getStartedImageBackground: Colors.green100,

  containerDefault:    Colors.gray50,
  containerFocus:      Colors.gray100,
  containerActive:     Colors.green100,
  containerInvalid:    Colors.red100,

  shortcutFill:        Colors.gray200,
  shortcutTypography:  Colors.gray600,

  graphCursor:         Colors.gray500,
  graphScalar:         Colors.gray200,
  graphPrimary:        Colors.green500,
  graphSecondary:      Colors.green100,

  buttonPrimary:        Colors.green500,
  buttonPrimaryColor:   Colors.gray0,
  buttonSecondary:      Colors.gray100,
  buttonSecondaryColor: Colors.gray950,
  buttonDisabled:       Colors.gray100,
  buttonDisabledColor:  Colors.gray500,

  compareSeparator: Colors.gray50,
  compareBackgroundLhs: Colors.green300,
  compareBackgroundRhs: Colors.green500,


  filterbarBorder:            Colors.gray50,
  filterbarSeparator:         Colors.gray900,
  filterbarBackgroundDefault: Colors.gray50,
  filterbarBackgroundHover:   Colors.gray50,

  filterbarItemColorDefault:      Colors.gray0,
  filterbarItemBackgroundDefault: Colors.gray950,
  filterbarItemBackgroundHover:   Colors.gray50,

  filterbarOperatorColorDefault:      Colors.gray300,
  filterbarOperatorBackgroundDefault: Colors.gray50,
  filterbarOperatorBackgroundHover:   Colors.gray100,


  onboardingCheckboxBackgroundActive: Colors.green500,
  onboardingCheckboxBorderActive:     Colors.green500,
  onboardingCheckboxBorderDefault:    Colors.gray100,

  onboardingUsageColorDefault:     Colors.gray500,
  onboardingUsageColorActive:      Colors.gray950,
  onboardingUsageBorderActive:     Colors.gray200,
  onboardingUsageBorderDefault:    Colors.gray100
};
