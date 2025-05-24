import { makeExecutableSchema } from '@graphql-tools/schema';
import { merge } from 'lodash';

import * as auth from './auth';
import * as item from './item';
import * as view from './view';
import * as field from './field';
import * as filter from './filter';
import * as event from './event';
import * as search from './search';
import * as settings from './settings';
import * as workspace from './workspace';
import * as membership from './membership';
import * as shared from './shared';
import * as user from './user';

export default makeExecutableSchema({
  typeDefs: [
    shared.schema,
    filter.schema,

    auth.schema,
    user.schema,
    item.schema,
    view.schema,
    field.schema,
    event.schema,
    search.schema,
    settings.schema,
    workspace.schema,
    membership.schema
  ],
  resolvers: merge(
    shared.resolvers,

    auth.resolvers,
    user.resolvers,
    item.resolvers,
    view.resolvers,
    field.resolvers,
    event.resolvers,
    search.resolvers,
    settings.resolvers,
    workspace.resolvers,
    membership.resolvers
  ),
});
