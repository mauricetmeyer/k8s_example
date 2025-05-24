/**
 * user.ts
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

import { createContext } from 'react';
import { Maybe, User }   from '~/graphql';

interface UserContextProps
{
  user?:   Maybe<User>;
  loading: boolean;
}

export const UserContext = createContext<UserContextProps>({ loading: true });
