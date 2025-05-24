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

import { hostname }    from 'os';
import { Environment } from '~/env';

export default {
  environment: Environment.str('NODE_ENV', 'development'),
  release:     Environment.str('RELEASE', 'N/A'),
  sentry_key:  Environment.str('SENTRY_DSN', null),

  hostname:    hostname(),
  epoche:      1577836800000, // 01-01-2020 00:00:00
  timelen:     5
}
