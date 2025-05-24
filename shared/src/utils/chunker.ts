/**
 * chunker.ts
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

import { Transform, TransformCallback } from 'stream';

class Chunker extends Transform
{
  private size:     number;
  private length:   number;
  private buffered: Buffer[];

  constructor (size: number)
  {
    super();
    this.size     = size;
    this.length   = 0;
    this.buffered = [];
  }

  public _transform (chunk: Buffer, _: BufferEncoding, next: TransformCallback)
  {
    this.length += chunk.length
    this.buffered.push(chunk)

    while (this.length >= this.size)
    {
      const b = Buffer.concat(this.buffered);
      this.length -= this.size
      this.push(b.slice(0, this.size))
      this.buffered = [b.slice(this.size, b.length)];
    }

    next();
  }

  public _flush ()
  {
    if (this.length) {
      /**
       * Push the rest of the buffer */
      this.push(Buffer.concat(this.buffered))
      this.buffered = [];
    }

    this.push(null)
  }
}

export default Chunker;
