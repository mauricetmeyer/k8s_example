/**
 * config.ts
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

export const config = {
  name:         process.env.NAME,
  release:      process.env.RELEASE,
  environment:  process.env.NODE_ENV,

  apiEndpoint:  process.env.API_ENDPOINT,
  syncEndpoint: process.env.SYNC_ENDPOINT,

  sentry_key:   process.env.SENTRY_DSN,
  stripe_key:   process.env.STRIPE_KEY,
  mixpanel_key: process.env.MIXPANEL_KEY,

  titleTemplate:      `%s - ${process.env.NAME}`,
  titleFallback:      process.env.NAME,

  defaultTitle:       process.env.NAME,
  defaultDescription: process.env.DESC,
}
