/**
 * item.ts
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

import { Index, Relation, Column, JoinColumn, PrimaryColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { id, Model } from '@leaflytics/shared';
import { Workspace } from './workspace';

@Model('Item', 'items')
export class Item
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('itm', 32);

  /**
   * The name of the field.
   * 
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  name!: string;

  /**
   * Description for this item
   *
   * @optional
   * @type {string}
   */
  @Column({ length: 2000, nullable: true })
  description?: string;

  /**
   * The workspace this field belongs to
   *
   * @required
   * @type {Workspace}
   */
  @Index()
  @JoinColumn()
  @ManyToOne(() => Workspace)
  workspace!: Relation<Workspace>;


  /**
   * The date the event was created.
   *
   * @required
   * @type {Date}
   */
  @CreateDateColumn()
  createdAt!: Date;
}
