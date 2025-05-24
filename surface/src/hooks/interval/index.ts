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


import { useEffect } from 'react';

const useInterval = (handler: () => void, interval: number) => useEffect(() => {
  const ref = setInterval(handler, interval);
  return () => clearInterval(ref);
}, [interval]);

export default useInterval;

