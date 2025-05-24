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

import { Index, Column, JoinColumn, ManyToOne, Relation, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { id, Model } from '@leaflytics/shared';
import { User } from './user';
import { Workspace } from './workspace';

export enum MembershipRole {
  Owner     = 'OWNER',
  Developer = 'DEVELOPER',
  Manager   = 'MANAGER',
  Regular   = 'REGULAR',
  Guest     = 'GUEST'
}

@Model('Membership', 'memberships')
export class Membership
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('mem', 32);


  /**
   * Role the user has inside the workspace.
   *
   * @unique
   * @required
   * @type {MembershipRole}
   */
  @Index()
  @Column({ length: 200 })
  role: MembershipRole = MembershipRole.Regular;


  /**
   * The email address of the user.
   *
   * @unique
   * @required
   * @type {string}
   */
  @Index()
  @JoinColumn()
  @ManyToOne(() => User)
  user!: Relation<User>;

  /**
   * The password hash of the user.
   *
   * @required
   * @type {string}
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
