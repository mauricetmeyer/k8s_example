/**
 * index.ts
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


import { useEffect } from 'react'

const getSheet = (node: HTMLStyleElement) => {
  if (node.sheet) {
    /**
     * We're lucky and have a nice
     * browser right here, thank you user! */
    return node.sheet;
  }

  /**
   * Not so lucky this time... */
  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === node) {
      return document.styleSheets[i];
    }
  }

  return undefined
}

const useStyle = (rule: string, active = true) => {
  useEffect(() => {
    if (!active) {
      /**
       * We'll return early in case that we
       * don't want the rule to be applied. */
      return;
    }

    /**
     * Create a new style sheet that will
     * prevent the body from being scrollable. */
    const node = document.createElement('style');
    document.head.appendChild(node);

    /**
     * Retrieve stylesheet */
    const sheet = getSheet(node);
    if (!sheet) {
      /**
       * We somehow failed to retrieve the stylesheet. */
      console.error('Failed to retrieve stylesheet!');
    }

    /**
     * Append rule. */
    try {
      sheet?.insertRule(rule, sheet.cssRules.length);
    } catch (e) {}

    /**
     * Return the function that will
     * discard the style sheet once the
     * component unmounts. */
    return () => { document.head.removeChild(node) }
  }, [active]);
};

export default useStyle;

