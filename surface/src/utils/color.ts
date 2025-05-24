/**
 * color.ts
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

export class Color
{
  private constructor (
    private r: number,
    private g: number,
    private b: number,
    private a: number)
  {}


  /**
   * Get color as hex string */
  get hex ()
  {
    const { r, g, b } = this;
    const parts = [
      this.pad2(Math.round(r).toString(16)),
      this.pad2(Math.round(g).toString(16)),
      this.pad2(Math.round(b).toString(16))
    ];

    return `#${parts.join('')}`;
  }

  /**
   * Get color as css rgb value */
  get rgb ()
  {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  /**
   * Get color as css rgba value */
  get rgba ()
  {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }


  /**
   * Set the alpha value */
  setAlpha (a: number)
  {
    this.a = Math.min(Math.max(a, 0), 1);
    return this;
  }


  /**
   * Helper to pad hex to 2 chars */
  private pad2 (str: string)
  {
    return str.length === 1 ? '0' + str : str;
  }


  /**
   * Get color from hex string. */
  static fromHex (hex: string)
  {
    //const lh    = (hex[0] === '#') ? 1 : 0;
    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!match) throw new Error(`Invalid hex color: ${hex}`);

    return new Color (parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16), 1);
  }

  /**
   * Get color from rgb string. */
  static fromRgb (rgb: string)
  {
    rgb = rgb.replace(/\s/g,'')
    const match = /rgb\((\d+),(\d+),(\d+)\)/.exec(rgb);
    if (!match) throw new Error(`Invalid rgb color: ${rgb}`);

    return new Color (+match[1], +match[2], +match[3], 1);
  }
}
