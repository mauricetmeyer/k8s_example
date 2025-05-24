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

import { createRoot }                                  from 'react-dom/client';
import mixpanel                                        from 'mixpanel-browser';
import { loadStripe }                                  from '@stripe/stripe-js';

import { config }                                      from '~/config';
import { initSentry, runInSentry }                     from '~/utils/sentry';
import { App }                                         from '~/components/app';
import { initApollo }                                  from '~/utils/apollo';

mixpanel.init(config.mixpanel_key);
initSentry(config.sentry_key, config.release);
runInSentry('main', async () => {
  /**
   * Try to get the #root element. */
  const rootElement = document.getElementById('root');
  if (!rootElement)
  {
    /**
     * @NOTE (Maurice):
     * Couldn't find the required root element. */
    throw new Error(`No #root element found`);
  }

  /**
   * Setup different clients */
  const apollo  = initApollo(config.apiEndpoint!);
  const stripe  = loadStripe(config.stripe_key);

  /**
   * Render the actual App */
  const root = createRoot(rootElement);
  root.render(<App locale="en" apollo={apollo} stripe={stripe} />);
});
