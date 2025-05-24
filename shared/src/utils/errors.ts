/**
 * errors.ts
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

import { errorMap, ErrorType } from '~/const';

export abstract class ServiceError extends Error
{
  public readonly code:           string = ErrorType.Unknown;
  public readonly originalError?: Error;

  protected constructor (message: string, code: string, name?: string)
  {
    super(message);
    Object.defineProperty(this, 'code', { value: code });
    Object.defineProperty(this, 'name', { value: name });
  }
}

export class InputError extends ServiceError
{
  constructor (message: string) {
    super(message, ErrorType.Input, 'InputError');
  }
}

export class InternalError extends ServiceError
{
  constructor (message: string) {
    super(message, ErrorType.Internal, 'InternalError');
  }
}

export class NotFoundError extends ServiceError
{
  constructor (message: string) {
    super(message, ErrorType.NotFound, 'NotFoundError');
  }
}

export class ForbiddenError extends ServiceError
{
  constructor (message: string) {
    super(message, ErrorType.Forbidden, 'ForbiddenError');
  }
}

export const constructError = (data: Buffer) : ServiceError | undefined => {
  const { code, message } = JSON.parse(data.toString('utf8'));
  return errorMap[code] && new errorMap[code](message);
}
