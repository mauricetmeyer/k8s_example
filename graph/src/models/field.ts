/**
 * field.ts
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

import { Index, Column, JoinColumn, Relation, ManyToOne, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { id, Model } from '@leaflytics/shared';
import { Workspace } from './workspace';

export enum FieldRole {
  USER     = 'USER',
  TEXT     = 'TEXT',
  DATE     = 'DATE',
  NUMBER   = 'NUMBER',
  SELECT   = 'SELECT',
  LABELS   = 'LABELS',
  HISTORIC = 'HISTORIC'
}

export enum FieldFormat {
  CURRENCY    = 'CURRENCY',
  PERCENTAGE  = 'PERCENTAGE',
  TEMPERATURE = 'TEMPERATURE'
}

@Model('Field', 'fields')
export class Field
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('fld', 32);

  /**
   * The name of the field.
   *
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  name!: string;


  /**
   * The value to map the field to.
   *
   * @required
   * @type {string}
   */
  @Column({ length: 200, nullable: true })
  path?: string;

  /**
   * Indicates if the field is required
   * 
   * @required
   * @type {boolean}
   */
  @Column({ default: false })
  required!: boolean;

  /**
   * The type of the field.
   *
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  role!: FieldRole;

  /**
   * The format of the field.
   *
   * @unique
   * @required
   * @type {string}
   */
  @Column({ length: 200, nullable: true })
  format?: FieldFormat;


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
