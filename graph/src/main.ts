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

import { ApolloServer }                 from '@apollo/server';
import { Cache, Accessor, Log, Server } from '@leaflytics/shared';

import config                           from '~/config';
import schema                           from '~/resolvers';
import { health }                       from '~/handlers/health';
import { metrics }                      from '~/handlers/metrics';
import { graphql }                      from '~/handlers/graphql';
import { ServerContext }                from '~/types/context';

const log      = new Log(config.logLevel);
const cache    = new Cache(config.redis);
const accessor = new Accessor(config.database);
const apollo   = new ApolloServer({ schema });
const server   = new Server<ServerContext>({ log, cache, apollo, accessor });

server.get('/health', health);
server.get('/metrics', metrics);
server.post('/graphql', graphql);

Promise.all([apollo.start(), cache.connect(), accessor.connect()])
  .then(
    () => {
      log.info('Starting service...', { logLevel: config.logLevel });
      server.listen(config.port);
    },
    (err) => log.error('Failed to connect to services', err),
  )
  .then(() => log.info(`Service started at ${config.port}`))
  .catch((err) => {
    log.error('Failed to run service', err);
    process.exit(1);
  });
