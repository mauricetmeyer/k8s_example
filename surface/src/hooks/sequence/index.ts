/**
 * index.ts
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


import { useRef, useEffect } from 'react';

const useSequence = (timeout: number) : void => {
  const sequence      = useRef<any[]>([]);
  const lastKeystroke = useRef<number>(0);

  useEffect(() => {
    sequence.current = [];
    lastKeystroke.current = 0
  }, [timeout]);

  if (lastKeystroke.current < Date.now() - timeout)
  {
    sequence.current = [];
  }

  lastKeystroke.current = Date.now();
};

export default useSequence;
