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

import { FC, useState }       from 'react';
import { LocalProviderProps } from './types';
import { IntlProvider }       from 'react-intl';

export const LocalProvider: FC<LocalProviderProps> = ({ locale, ...props }) => {
  const [messages, setMessages] = useState({});

  return (
    <IntlProvider
      {...props}
      defaultLocale="en"
      locale={locale}
      messages={messages}
    />
  );
};
