/**
 * dark.ts
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

export const Dark: Record<string, string> = {
  radiusS:             '4px',
  radiusM:             '8px',
  radiusL:             '20px',

  border:       Colors.gray900,

  backgroundDefault:   Colors.gray950,
  backgroundAlternate: Colors.gray900,
  backgroundCard:      Colors.gray800,
  backgroundHighlight: Colors.green900,
  backgroundOverlay:   `rgba(0, 0, 0, .75)`,

  typographyPrimary:     Colors.gray0,
  typographySecondary:   Colors.gray500,
  typographyPlaceholder: Colors.gray700,

  typographyInvalid:            Colors.red500,
  typographyInvalidSecondary:   Colors.red700,
  typographyHighlight:          Colors.green500,
  typographyHighlightSecondary: Colors.green700,

  inputBackgroundDefault:   Colors.gray900,
  inputBackgroundDisabled:  Colors.gray800,
  inputPlaceholderDefault:  Colors.gray700,
  inputPlaceholderInvalid:  Colors.gray700,
  inputPlaceholderDisabled: Colors.gray700,
  inputBorderDefault:       Colors.gray900,
  inputBorderFocus:         Colors.gray800,
  inputBorderInvalid:       Colors.red900,
  inputBorderDisabled:      Colors.gray800,
  
  buttonBackgroundPrimary:   Colors.gray0,
  buttonBackgroundSecondary: Colors.gray800,
  buttonBackgroundDisabled:  Colors.gray800,
  buttonColorPrimary:        Colors.gray950,
  buttonColorSecondary:      Colors.gray0,
  buttonColorDisabled:       Colors.gray600,

  scrollbarBackgroundDefault: Colors.gray100,
  scrollbarBackgroundHover: Colors.gray200,

  omnibarOverlay: 'rgba(0, 0, 0, 0.8)',
  omnibarBackground: Colors.gray900,

  avatarBackground: Colors.gray800,
  avatarColor:      Colors.gray0,

  navigationBackground: Colors.gray900,
  navigationTagDefault: Colors.gray800,
  navigationTagHover: Colors.gray700,
  navigationTagActive: Colors.gray700,
  navigationColorDefault: Colors.gray500,
  navigationColorHover:   Colors.gray500,
  navigationColorActive:  Colors.gray0,
  navigationBackgroundDefault: Colors.gray900,
  navigationBackgroundHover:   Colors.gray800,
  navigationBackgroundActive:  Colors.gray800,

  sidepaneBorder: Colors.gray950,

  boardItemBackground: Colors.gray950,
  boardGroupBackground: Colors.gray900,

  labelBackground: Colors.grey700,
  labelColor:      Colors.grey500,

  tableColumnBackground: Colors.gray950,
  tableItemBackgroundActive: Colors.gray900,
  tableCellBackgroundActive: Colors.gray800,

  listItemBackgroundDefault: Colors.gray900,
  listItemBackgroundActive: Colors.gray800,

  getStartedBackground: Colors.gray900,
  getStartedImageBackground: Colors.green800,

  containerDefault:    Colors.gray900,
  containerFocus:      Colors.gray800,
  containerActive:     Colors.green900,
  containerInvalid:    Colors.red900,

  shortcutFill:        Colors.gray700,
  shortcutTypography:  Colors.gray400,

  graphCursor:         Colors.gray500,
  graphScalar:         Colors.gray800,
  graphPrimary:        Colors.green500,
  graphSecondary:      Colors.green100,

  compareSeparator: Colors.gray900,
  compareBackgroundLhs: Colors.green800,
  compareBackgroundRhs: Colors.green500,


  filterbarBorder:            Colors.gray50,
  filterbarSeparator:         Colors.gray900,
  filterbarBackgroundDefault: Colors.gray900,
  filterbarBackgroundHover:   Colors.gray800,

  filterbarItemColorDefault:      Colors.gray0,
  filterbarItemBackgroundDefault: Colors.gray950,
  filterbarItemBackgroundHover:   Colors.gray50,

  filterbarOperatorColorDefault:      Colors.gray500,
  filterbarOperatorBackgroundDefault: 'transparent',
  filterbarOperatorBackgroundHover:   Colors.gray900,


  onboardingCheckboxBackgroundActive: Colors.green500,
  onboardingCheckboxBorderActive:     Colors.green500,
  onboardingCheckboxBorderDefault:    Colors.gray800,

  onboardingUsageColorDefault:     Colors.gray500,
  onboardingUsageColorActive:      Colors.gray0,
  onboardingUsageBorderActive:     Colors.gray700,
  onboardingUsageBorderDefault:    Colors.gray800
};
