import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createHttpLink }                          from '@apollo/client/link/http';
import { RetryLink }                               from '@apollo/client/link/retry';
import { setContext }                              from '@apollo/client/link/context';

export const initApollo = (url: string, initialState = {}) => {
  /**
   * Create http link */
  const httpLink = createHttpLink({
    uri: url,
    credentials: 'same-origin'
  });
  

  const contextLink = setContext((_, { headers }) => {
    const workspaceId = localStorage.getItem('currentWorkspace')
    return {
      headers: {
        ...headers,
        'x-ll-workspace': workspaceId ? JSON.parse(workspaceId) : ''
      }
    }
  });

  /**
   * Create retry link, retry 3 times 300ms apart. */
  const retryLink = new RetryLink({
    delay: {
      initial: 300,
      jitter: true,
    },
    attempts: {
      max: 3,

      /**
       * Retry if either the statuscode > 500 (server error) or there's no statusCode
       * which indicates a complete Network failure. */
      retryIf: error => error && (error.statusCode >= 500 || error.statusCode === undefined)
    },
  });

  return new ApolloClient({
    link:  ApolloLink.from([httpLink, retryLink, contextLink]),
    cache: new InMemoryCache({}).restore(initialState || {})
  });
};
