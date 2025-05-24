/**
 * user.ts
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
import { id, Model } from '@leaflytics/shared';

@Model('User', 'users')
export class User
{
  /**
   * The unique identifier.
   *
   * @required
   * @type {string}
   */
  @PrimaryColumn({ unique: true })
  readonly id: string = id('usr', 32);


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
   * The email address of the user.
   *
   * @unique
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  email!: string;

  /**
   * The password hash of the user.
   *
   * @required
   * @type {string}
   */
  @Column({ length: 200 })
  password!: string;


  /**
   * The date the event was created.
   *
   * @required
   * @type {Date}
   */
  @CreateDateColumn()
  createdAt!: Date;
}
