/**
 * index.tsx
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


import { FC }         from 'react';
import { Helmet }     from 'react-helmet-async';
import { TitleProps } from './types';

export const Title: FC<TitleProps> = ({ content, fallback, template }) =>
  content ? (
    <Helmet defer={false}>
      <title>{content}</title>
    </Helmet>
  ) : <Helmet titleTemplate={template} defaultTitle={fallback} defer={false}/>;
