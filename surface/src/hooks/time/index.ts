/**
 * index.ts
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


import { useState } from 'react';
import useInterval  from '~/hooks/interval';

const pad = (value: number, padding: number = 2): string => {
  const str = value.toFixed().toString();
  return str.length < padding ? "0".repeat(padding - str.length) + str : str;
}

const conv = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return [hours, minutes, seconds].map(v => pad(v)).join(':');
};

const useTime = (since: number) => {
  const [value, setValue] = useState('00:00:00');
  useInterval(() => {
    const delta = Date.now() - since;
    const time  = conv(delta / 1000);
    setValue(time);
  }, 1e3);
  return value;
};

export default useTime;

