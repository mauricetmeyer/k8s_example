/**
 * view.ts
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

import { Index, Relation, Column, JoinColumn, ManyToOne, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { id, Model } from '@leaflytics/shared';
import { Workspace } from './workspace';

export enum ViewRole {
  Item   = 'ITEM',
  Event  = 'EVENT',
  Member = 'MEMBER'
}

export enum ViewType {
  List     = 'LIST',
  Board    = 'BOARD',
  Timeline = 'TIMELINE'
}

@Model('View', 'views')
export class View
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('view', 32);


  /**
   * The name of the view.
   *
   * @unique
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  name!: string;

  /**
   * Description for this view
   *
   * @optional
   * @type {string}
   */
  @Column({ length: 2000, nullable: true })
  description?: string;

  /**
   * The role of the view.
   *
   * @unique
   * @required
   * @type {ViewRole}
   */
  @Index()
  @Column({ length: 200 })
  role!: ViewRole;

  /**
   * The role of the view.
   *
   * @unique
   * @required
   * @type {ViewType}
   */
  @Index()
  @Column({ length: 200 })
  type!: ViewType;


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
