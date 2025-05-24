/**
 * isTextInput.ts
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

const INPUT_TYPES = ['text', 'email', 'search', 'password'];
export const isTextInput = (el?: HTMLElement) => el && (
     el.contentEditable === 'true'
  || el instanceof HTMLTextAreaElement
  || el instanceof HTMLInputElement && INPUT_TYPES.indexOf(el.type) !== -1
);
