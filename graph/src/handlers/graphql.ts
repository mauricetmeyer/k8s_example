/**
 * graphql.ts
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

import { Handler }       from '@leaflytics/shared';
import { Readable } from 'stream';
import { Membership } from '~/models/membership';
import { Session }       from '~/models/session';
import { ServerContext } from '~/types/context';

export const graphql: Handler<ServerContext> = async (request, response, { apollo, accessor, ...props }) => {
  const sessions = accessor.getRepository(Session);

  const sessionId   = request.cookie.get('session');
  const workspaceId = request.header.get('x-ll-workspace');

  let session: Session | null = null;
  if (sessionId) {
    session = await sessions.findOne({ 
      where: { id: sessionId },
      relations: { user: true }
    });
  }

  const requestBody = await request.json;
  const { body, headers, status } = await apollo.executeHTTPGraphQLRequest({
    context: async () => ({ ...props, user: session?.user, session, accessor, request, response, workspaceId }),
    httpGraphQLRequest: {
      method:  request.method,
      headers: request.header,
      search:  request.url.search ?? '',
      body:    requestBody,
    }
  });

  for (const [key, value] of headers) {
    response.header.set(key, value);
  }

  let responseBody: string | Readable;
  switch (body.kind) {
    case 'complete':
      responseBody = body.string;
      break;

    case 'chunked':
      responseBody = Readable.from(
        (async function* () {
          for await (const chunk of body.asyncIterator) {
            yield chunk;
          }
        })()
      );
      break;
  }

  /**
   * Encode the damn response */
  response.encode(status ?? 200, 'application/json', responseBody);
};
