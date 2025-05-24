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

import { Log, Cache, Server } from '@leaflytics/shared';
import config                 from '~/config';
import { hook }               from '~/handlers/hook';
import { health }             from '~/handlers/health';
import { metrics }            from '~/handlers/metrics';

const log      = new Log(config.logLevel);
const cache    = new Cache(config.redis);
const server   = new Server({ log, cache });

server.get('/', hook);
server.get('/health', health);
server.get('/metrics', metrics);

server.listen(config.port).then(
  ()  => log.info(`Service started at ${config.port}`),
  err => log.error('Failed to run service', err)
);
