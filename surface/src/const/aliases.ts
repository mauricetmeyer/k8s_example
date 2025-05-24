/**
 * aliases.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 *
 * (c) Laviréo. All rights reserved.
 */

export const Aliases: Record<string, string> = {
  'Alt': 'Alt',
  'Cmd': 'Meta',
  'Ret': 'Enter',
  'Esc': 'Escape',
  'Mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'Meta' : 'Control'
};
