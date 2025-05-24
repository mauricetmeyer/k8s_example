/**
 * index.tsx
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * Copyright (c) Laviréo. All rights reserved.
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 */

import { FC, useEffect, useMemo } from 'react';
import { createPortal }           from 'react-dom';
import { PortalProps }                                       from './types';
import { appendContainer, createContainer, removeContainer } from './utils';

// @ts-ignore
const Portal: FC<PortalProps> = ({ children, zIndex }) => {
  const container = useMemo(() => createContainer(zIndex), [zIndex]);

  useEffect(() => {
    appendContainer(container);
    return () => removeContainer(container);
  }, [container]);

  // @ts-ignore
  return createPortal(children, container);
};

export default Portal;

