/**
 * index.tsx
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

import { FC }           from 'react';
import { useFlagStore } from '~/stores/flag';
import { Styles }       from './styles';

export const Flags: FC = () => {
  const store = useFlagStore();

  return (
    <div css={Styles.flags}>

    </div>
  );
}