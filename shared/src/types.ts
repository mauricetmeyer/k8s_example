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

import { BufferWriter } from 'protobufjs';

export interface Ctor<T>
{
  new (): T;
  decode<T>(reader: Buffer): T;
  encode(message: { [k: string]: any }): BufferWriter;
}
