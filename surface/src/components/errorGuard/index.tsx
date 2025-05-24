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

import { Component }                              from 'react';
import { handleException }                        from '~/utils/sentry';
import { ErrorProviderProps, ErrorProviderState } from './types';
import Fallback                                   from './fallback';

export class ErrorGuard extends Component<ErrorProviderProps, ErrorProviderState>
{
  state: ErrorProviderState = {};

  render ()
  {
    const { error }    = this.state;
    const { children } = this.props;
    return error ? <Fallback error={error} /> : children;
  }

  componentDidCatch (error: Error)
  {
    this.setState({ error });
    console.log(error);
    handleException(error, 'Error caught in componentDidCatch');
  }
}
