/**
 * event.ts
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

import { Index, Column, Relation, ManyToOne, JoinColumn, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { id, Model } from '@leaflytics/shared';
import { User }      from './user';
import { Item }      from './item';
import { Workspace } from './workspace';

export enum EventType {
  UserLogin        = 'user.login',
  UserLogout       = 'user.logout',

  MemberAdded      = 'member.added',
  MemberRemoved    = 'member.removed',

  ItemCreated      = 'item.created',
  ItemUpdated      = 'item.updated',
  ItemRemoved      = 'item.removed',

  ViewCreated      = 'view.created',
  ViewUpdated      = 'view.updated',
  ViewRemoved      = 'view.removed',

  WorkspaceCreated = 'workspace.created',
  WorkspaceUpdated = 'workspace.updated',
  WorkspaceDeleted = 'workspace.deleted'
}

@Model('Event', 'events')
export class Event
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('evt', 32);

  /**
   * Data that was provided with
   * the event.
   *
   * @optional
   * @type {any}
   */
  @Index()
  @Column({ length: 200 })
  type!: EventType;

  /**
   * Data that was provided with
   * the event.
   *
   * @optional
   * @type {any}
   */
  @Column({ type: 'jsonb', default: {} })
  data!: any;

  /**
   * The user that initiated the event.
   * this should always be populated, except for system events.
   * 
   * @optional
   * @type {User}
   */
  @Index()
  @JoinColumn()
  @ManyToOne(() => User, { nullable: true })
  user?: Relation<User>;

  @Column({ nullable: true })
  userId?: string;

  /**
   * The item this event belongs to.
   * this should always be populated, except for system events.
   * 
   * @optional
   * @type {Item}
   */
  @Index()
  @JoinColumn()
  @ManyToOne(() => Item, { nullable: true })
  item?: Relation<Item>;

  @Column({ nullable: true })
  itemId?: string;

  /**
   * The workspace this event belongs to.
   * 
   * @optional
   * @type {Workspace}
   */
  @Index()
  @JoinColumn()
  @ManyToOne(() => Workspace)
  workspace!: Relation<Workspace>;

  @Column()
  workspaceId?: string;


  /**
   * The date the event was created.
   *
   * @required
   * @type {Date}
   */
  @CreateDateColumn()
  createdAt!: Date;
}
