/**
 * workspace.ts
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

import { Index, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { id, Model } from '@leaflytics/shared';

export enum WorkspaceRole {
  Regular   = 'REGULAR',
  Developer = 'DEVELOPER'
}

@Model('Workspace', 'workspaces')
export class Workspace
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('wrkspc', 32);


  /**
   * Role the user has inside the workspace.
   *
   * @required
   * @type {WorkspaceRole}
   */
  @Index()
  @Column({ length: 200 })
  role: WorkspaceRole = WorkspaceRole.Regular;


  /**
   * The name of the user.
   *
   * @unique
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  name!: string;


  /**
   * The date the event was created.
   *
   * @required
   * @type {Date}
   */
  @CreateDateColumn()
  createdAt!: Date;
}
