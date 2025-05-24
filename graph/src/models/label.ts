/**
 * label.ts
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

import { Column, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { id, Model }                               from '@leaflytics/shared';

@Model('Label', 'labels')
export class Label
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('lbl', 32);


  /**
   * The value of the label field
   *
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  value!: string;

  /**
   * The color this label has.
   *
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  color!: string;


  /**
   * The date the event was created.
   *
   * @required
   * @type {Date}
   */
  @CreateDateColumn()
  createdAt!: Date;
}
