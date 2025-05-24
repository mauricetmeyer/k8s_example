/**
 * index.ts
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

import { env } from '@leaflytics/shared';

const config: Record<string, any> = {
  env:      env.str('ENV', 'development'),
  port:     env.int('PORT', 6000),
  domain:   env.str('DOMAIN', 'dev.local'),
  logLevel: env.str('LOG_LEVEL', 'warn'),

  
  redis:    env.str('REDIS_URI', 'redis://default:password@localhost:6379'),
  queue:    env.str('RABBITMQ_URI', 'amqp://rabbitmq:5672'),
  database: env.str('POSTGRES_URI', 'postgres://leaflytics:leaflytics@postgres:5432/postgres'),

  limits: [
    {
      age: 18,
      limit: 25
    },
    {
      age: 21,
      limit: 50
    }
  ]
};

export default config;
