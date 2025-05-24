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

import { FC, memo, StrictMode } from 'react';
import { HelmetProvider }       from 'react-helmet-async';
import { ApolloProvider }       from '@apollo/client';
import { Reset }                from '~/components/reset';
import { Flags }                from '~/components/flags';
import { Title }                from '~/components/title';
import { ErrorGuard }           from '~/components/errorGuard';
import { UserProvider }         from '~/components/userProvider';
import { LocalProvider }        from '~/components/localProvider';
import { AppearanceProvider }   from '~/components/appearanceProvider';
import { AppProps }             from './types';

export const App: FC<AppProps> = memo(({ apollo, locale }) => (
  <StrictMode>
    <ErrorGuard>
      <HelmetProvider>
        <ApolloProvider client={apollo}>
          <UserProvider>
            <LocalProvider locale={locale}>
              <AppearanceProvider>
                <Reset />
                <Flags />
                <Title />
              </AppearanceProvider>
            </LocalProvider>
          </UserProvider>
        </ApolloProvider>
      </HelmetProvider>
    </ErrorGuard>
  </StrictMode>
));
