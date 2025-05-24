/**
 * styles.ts
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

import { css } from '@emotion/react';

export const Styles = {
  space: css`
    display:        flex;
    gap:            var(--space-gap, 0);
    flex-direction: var(--space-direction, column);
    `
}

// export const Child = styled.div<SpacedChildsProps>`
//   ${p => `padding-${p.horizontal ? 'left' : 'top'}: ${p.isHeader ? p.header : (p.space || 0) * .5}px`};
//   ${p => `padding-${p.horizontal ? 'right' : 'bottom'}: ${p.isTrailer ? p.trailer : (p.space || 0) * .5}px`};
// `;
