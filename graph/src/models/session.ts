/**
 * session.ts
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
import { User } from './user';

@Model('Session', 'sessions')
export class Session
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('ses', 32);


  /**
   * The user that initiated the event.
   * this should always be populated, except for system events.
   * 
   * @optional
   * @type {User}
   */
  @Index()
  @JoinColumn()
  @ManyToOne(() => User)
  user?: Relation<User>;


  /**
   * The date the session was created.
   *
   * @required
   * @type {Date}
   */
  @CreateDateColumn()
  createdAt!: Date;

  /**
   * The date the session was revoked.
   *
   * @required
   * @type {Date}
   */
  @Column({ nullable: true })
  revokedAt?: Date;
}
