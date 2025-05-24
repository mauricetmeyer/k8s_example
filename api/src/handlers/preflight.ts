/**
 * preflight.ts
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

import { Handler } from '@leaflytics/shared';

const maxAge  = 600;
const methods = ['GET', 'POST'];
const headers = ['Accept-Language', 'Accept', 'Authorization', 'Content-Type', 'X-Trace', 'X-Token'];
export const preflight: Handler = async (req, res) => {
  res.header.set('timing-allow-origin', '*');
  res.header.set('access-control-allow-origin', '*');
  res.header.set('access-control-max-age', maxAge);
  res.header.set('access-control-allow-methods', methods.join(','));
  res.header.set('access-control-allow-headers', headers.join(','));
  res.send(200);
};
