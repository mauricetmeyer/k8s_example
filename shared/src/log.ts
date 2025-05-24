/**
 * log.ts
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

import { DateTime } from 'luxon';

enum LogLevel
{
  Null  = 0,
  Fatal = 1,
  Error = 2,
  Warn  = 3,
  Info  = 4,
  Debug = 5,
  Trace = 6
}

const LogLevelLabel: Record<number, string> = {
  [LogLevel.Fatal]: 'Fatal',
  [LogLevel.Error]: 'Error',
  [LogLevel.Warn]:  'Warn',
  [LogLevel.Info]:  'Info',
  [LogLevel.Debug]: 'Debug',
  [LogLevel.Trace]: 'Trace'
};

const LogLevelMap: Record<string, LogLevel> = {
  'fatal': LogLevel.Fatal,
  'error': LogLevel.Error,
  'warn':  LogLevel.Warn,
  'info':  LogLevel.Info,
  'debug': LogLevel.Debug,
  'trace': LogLevel.Trace
};

export class Log
{
  private level: LogLevel;

  /**
   * Constructor
   *
   * @param {string} level
   */
  constructor (level: string)
  {
    this.level = LogLevelMap[level];
  }

  /**
   * Logging helper
   * 
   * @param  {string} msg
   * @param  {...}    params
   */
  public readonly trace = (msg: string, ...params: any[]) : void =>
    this.log(LogLevel.Trace, msg, params);

  public readonly debug = (msg: string, ...params: any[]) : void =>
    this.log(LogLevel.Debug, msg, params);

  public readonly info  = (msg: string, ...params: any[]) : void =>
    this.log(LogLevel.Info,  msg, params);

  public readonly warn  = (msg: string, ...params: any[]) : void =>
    this.log(LogLevel.Warn,  msg, params);

  public readonly error = (msg: string, ...params: any[]) : void =>
    this.log(LogLevel.Error, msg, params);

  public readonly fatal = (msg: string, ...params: any[]) : void =>
    this.log(LogLevel.Fatal, msg, params);


  /**
   * **INTERNAL**
   * Logging functionality.
   *
   * @param {string} lvl
   * @param {string} msg
   * @param {object} params
   */
  private log (lvl: LogLevel, msg: string, params: any[]) : void
  {
    if (lvl > this.level)
    {
      /**
       * Log level is bigger than the current log level,
       * we can ignore it. */
      return;
    }

    /**
     * Date format 'n' stuff */
    const date    = DateTime.local();
    const dateStr = date.toFormat('yyyy-MM-dd HH:mm:ss.SSSZZZ (ZZZZ)');

    /**
     * Try to pull out the error and the metadata parameters. */
    const error    = Log.extractError(params);
    const metadata = Log.extractMetadata(params);

    /**
     * Transform remaining parameters into a nicely formatted string. */
    const data: string[] = [];
    if (metadata)
    {
      for (const key in metadata)
      {
        if (Object.hasOwnProperty.call(metadata, key))
        {
          const value    = metadata[key];
          const valueStr = typeof value === 'string' ? value
                         : typeof value === 'number' ? String(value)
                         : (value ? 'true' : 'false');

          data.push(`${key}=${valueStr}`);
        }
      }
    }

    /**
     * Construct log message */
    let fmt = `[${dateStr}] ${LogLevelLabel[lvl]} ${msg}`;
    if (data.length > 0)
    {
      fmt += ` - ${data.join(' ')}`;
    }

    if (error)
    {
      /**
       * Append the error message to the fmt string. */
      fmt += ` - Error: ${error.message}`;
      if (error.stack)
      {
        /**
         * If the error contains a stacktrace we'll
         * include it in the next few lines. */
        fmt += `\n-- TRACE\n${error.stack.split('\n').slice(1).map(l => l.trim()).join('\n')}\n-- TRACE`;
      }
    }

    /**
     * Log to stdout/stderr */
    // @eslint-disable-next-line no-console
    lvl <= LogLevel.Error ? console.error(fmt) : console.log(fmt);
  }


  /**
   * **INTERNAL**
   * Pull out the first error param if it exists.
   *
   * @param  {...} params
   * @return {Error|undefined}
   */
  private static extractError = (params: any[]) : Error | undefined =>
    params.find(p => (p instanceof Error));

  /**
   * **INTERNAL**
   * Extract all metadata from the parameters
   *
   * @param  {...} params
   * @return {LogMetadata|undefined}
   */
  private static extractMetadata = (params: any[]) : Record<string, string | number | boolean> | undefined =>
    params.find(p => (!(p instanceof Error) && typeof p === 'object'));
}
