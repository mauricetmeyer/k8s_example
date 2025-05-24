/**
 * call.ts
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

import got                                             from 'got';
import { handleException }                             from '~/utils/sentry';
import { constructError, InternalError, ServiceError } from '~/utils/errors';

const RPCTLD = 'service';
const call = (method: string, message: Buffer | Uint8Array) => {
  const [ service, key ] = method.split(':');

  const props = {
    body: Buffer.from(message),
    headers: {
      'content-type': 'application/protobuf'
    }
  }

  /**
   * Send the actual request */
  return got.post(`http://${service}.${RPCTLD}/${key}`, props).buffer().catch(
    err => {
      let error: ServiceError | undefined;
      if (err?.response?.body)
      {
        error = constructError(err.response.body);
      }

      if (!error)
      {
        error = new InternalError('Unknown error');
        handleException(err, 'Failed to call remote method');
      }

      throw error;
    }
  )
}

export default call;
