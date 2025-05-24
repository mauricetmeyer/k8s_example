/**
 * sentry.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * Copyright (c) Laviréo. All rights reserved.
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 */

import * as Sentry from '@sentry/browser';

interface SentryParams {
  tags?:  Record<string, string | number>;
  level?: Sentry.SeverityLevel;
}

/**
 * Initializes Sentry tracing client
 *
 * @param {string} dsn=
 * @param {string} release=
 */
export const initSentry = (dsn?: string, release?: string): void => {
  if (!dsn) return;

  /**
   * Initialize the Sentry client library
   * and create Sentry instance. */
  Sentry.init({
    dsn,
    release,
    environment: 'production',
    attachStacktrace: true,

    /**
     * List of integrations
     * that we'll use with Sentry. */
    integrations: [
      /**
       * Don't send any data to Sentry
       * while we're developing. */
      new Sentry.Integrations.InboundFilters({
        denyUrls: [
          /dev\.lavireo\.com/,
          /localhost:3000/,
        ]
      }),

      new Sentry.Integrations.FunctionToString,
      new Sentry.Integrations.TryCatch,
      new Sentry.Integrations.Breadcrumbs,
      new Sentry.Integrations.GlobalHandlers({
        onerror: true,
        onunhandledrejection: true,
      }),
      new Sentry.Integrations.LinkedErrors
    ]
  });
}

/**
 * Let Sentry handle the error.
 *
 * @param {unknown}      error
 * @param {string}       message
 * @param {SentryParams} params
 */
export const handleSentry = (message: string, params: SentryParams = {}, error?: unknown) => {
  console.error(message, error);
  const { tags, level = 'error' } = params;
  Sentry.withScope(scope => {
    scope.setLevel(level as Sentry.Severity);
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
      Sentry.captureException(error);
    } else {
      Sentry.captureMessage(message);
    }
  });
}

/**
 * Let Sentry handle the error.
 *
 * @param {string}       message
 * @param {SentryParams} params
 */
export const handleError = (message: string, params?: SentryParams) =>
  handleSentry(message, params);

/**
 * Let Sentry handle the error.
 *
 * @param {unknown}      error
 * @param {string}       message
 * @param {SentryParams} params
 */
export const handleException = (error: unknown, message: string, params?: SentryParams) =>
  handleSentry(message, params, error);

/**
 * Run provided function with wrapped Sentry.
 *
 * @param {string}     scope
 * @param {() => Promise<void>} callback
 */
export const runInSentry = (scope: string, callback: () => Promise<void>) => {
  callback().catch(err => handleException(err, 'Failed to run'));
}
