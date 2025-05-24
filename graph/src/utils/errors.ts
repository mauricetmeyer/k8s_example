import { GraphQLError } from 'graphql';

export function badRequest(message: string) {
  return new GraphQLError(message, {
    extensions: {
      code: 'BAD_REQUEST',
    },
  });
}

export function unathorized(message: string) {
  return new GraphQLError(message, {
    extensions: {
      code: 'UNAUTHORIZED',
    },
  });
}

export function unauthenticated(message: string) {
  return new GraphQLError(message, {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  });
}

export function internalServerError(message: string) {
  return new GraphQLError(message, {
    extensions: {
      code: 'INTERNAL_SERVER_ERROR',
    },
  });
}
