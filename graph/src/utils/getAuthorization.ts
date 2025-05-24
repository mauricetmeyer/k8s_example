import { IncomingMessage } from 'http';

export const getAuthorization = (req: IncomingMessage): string | undefined => {
  const matches = String(req.headers.authorization).match(/^Bearer[ \t]+(.+)$/);
  return matches ? matches[1] : undefined;
};
