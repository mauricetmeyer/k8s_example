/**
 * client.ts
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

import protobuf from 'protobufjs';
import call     from './call';

interface Interface<T>
{
  create (impl: protobuf.RPCImpl): T;
}

function createClient<T extends protobuf.rpc.Service> (key: string, service: Interface<T>) : T
{
  const rpcImpl: protobuf.RPCImpl = (method, data, cb) => {
    call(`${key}:${method.name}`, data).then(
      result => cb(null, result),
      error  => cb(error, null)
    );
  }

  return service.create(rpcImpl);
}

export default createClient;
