/**
 * const.ts
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

import { ForbiddenError, InputError, InternalError, NotFoundError } from './utils/errors';

export enum ErrorType
{
  Internal     = 'INTERNAL_ERROR',
  NotFound     = 'NOT_FOUND',
  Input        = 'INVALID_ARGUMENT',
  Forbidden    = 'FORBIDDEN',
  Unknown      = 'UNKNOWN'
}

export const errorMap: Record<string, typeof InternalError> = {
  [ErrorType.Internal]:  InternalError,
  [ErrorType.NotFound]:  NotFoundError,
  [ErrorType.Input]:     InputError,
  [ErrorType.Forbidden]: ForbiddenError
};
