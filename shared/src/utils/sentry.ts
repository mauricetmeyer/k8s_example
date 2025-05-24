/**
 * sentry.ts
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

import {
  init,
  withScope,
  captureMessage,
  captureException,
  Integrations,
  Severity,
  SeverityLevel
} from '@sentry/node';
import config from '~/config';

interface SentryParams {
  tags?:  Record<string, string | number>;
  level?: SeverityLevel;
}

/**
 * Let Sentry handle the error.
 *
 * @param {unknown}      error
 * @param {string}       message
 * @param {SentryParams} params
 */
const handleSentry = (message: string, params: SentryParams = {}, error?: unknown) : void => {
  const { tags, level = 'error' } = params;
  withScope(scope => {
    scope.setLevel(level as Severity);
    scope.setTag('error_level', level);
    scope.setTag('error_message', message);

    if (tags) {
      /**
       * Assign user specified tags. */
      Object.keys(tags).forEach((key: string) => {
        scope.setTag(key, tags[key]);
      });
    }

    if (error) {
      captureException(error);
    } else {
      captureMessage(message);
    }
  });
}

/**
 * Let Sentry handle the error.
 *
 * @param {string}       message
 * @param {SentryParams} params
 */
export const handleError = (message: string, params?: SentryParams) : void =>
  handleSentry(message, params);

/**
 * Let Sentry handle the error.
 *
 * @param {unknown}      error
 * @param {string}       message
 * @param {SentryParams} params
 */
export const handleException = (error: unknown, message: string, params?: SentryParams) : void =>
  handleSentry(message, params, error);


/**
 * Initializes Sentry tracing client
 *
 * @param {string} dsn=
 * @param {string} release=
 */
export const initSentry = (): void => {
  if (!config.sentry_key) return;

  /**
   * Initialize the Sentry client library
   * and create Sentry instance. */
  init({
    dsn:        config.sentry_key,
    release:    config.release,
    environment:config.environment,
    attachStacktrace: true,

    /**
     * List of integrations
     * that we'll use with Sentry. */
    integrations: [
      /**
       * Don't send any data to Sentry
       * while we're developing. */
      new Integrations.InboundFilters({
        denyUrls: [
          /dev\.lavireo\.com/,
          /localhost:5000/,
        ]
      }),

      new Integrations.FunctionToString,
      new Integrations.OnUncaughtException,
      new Integrations.OnUnhandledRejection,
      new Integrations.LinkedErrors
    ]
  });
}
