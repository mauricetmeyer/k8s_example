/**
 * types.ts
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

export interface StorageOptions
{
  key:      string;
  secret:   string;
  endpoint: string;
}

export interface WriteProps
{
  type?:   string;
  hidden?: boolean;
}
