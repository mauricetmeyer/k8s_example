import { GraphQLScalarType } from 'graphql';
import { isString } from 'lodash';

import { Resolvers } from '~/types/resolvers';

const Cursor = new GraphQLScalarType({
  name: 'Cursor',
  serialize: (value) => {
    const strValue = isString(value) ? value : JSON.stringify(value);
    return Buffer.from(strValue).toString('base64');
  },
  parseValue: (value) => {
    if (!isString(value)) {
      throw new Error('Cursor needs to be of type string.');
    }

    return Buffer.from(value, 'base64').toString('utf8');
  },
});

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  serialize: (value) => {
    if (value instanceof Date) {
      return value.toISOString();
    }

    throw new Error(`Expected DateTime value to be an instance of Date: ${value}`);
  },
  parseValue: (value) => {
    if (typeof value === 'string') {
      return new Date(value).getTime();
    }

    throw new Error(`Expected DateTime value to be a string: ${value}`);
  },
});

export const resolvers: Resolvers = {
  Cursor,
  DateTime,
};
