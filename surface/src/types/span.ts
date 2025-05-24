/**
 * span.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 *
 * (c) Laviréo. All rights reserved.
 */

import { Log } from "./log";

export type Span = {
  /**
   * Label for the span */
  label: string;

  /**
   * Tags assigned to the span */
  logs: Log[];

  /**
   * Tags assigned to the span */
  tags: string[];

  /**
   * Start timestamp */
  start: number;

  /**
   * Duration of the span */
  duration: number;
}