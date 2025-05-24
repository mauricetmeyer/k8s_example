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

import { FC }                from 'react';
import { User, useMeQuery }  from '~/graphql';
import { UserContext }       from '~/contexts/user';
import { UserProviderProps } from './types';

export const UserProvider: FC<UserProviderProps> = props => {
  const { data, loading } = useMeQuery({ fetchPolicy: 'network-only' });
  return <UserContext.Provider {...props} value={{ loading, user: data?.me as User }} />;
};
