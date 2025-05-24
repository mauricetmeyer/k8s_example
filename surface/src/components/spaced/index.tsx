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


import { FC }          from 'react';
import { SpacedProps } from './types';
import { Styles }      from './styles';

export const Spaced: FC<SpacedProps> = ({ gap, header, trailer, horizontal, ...props }) => (
  <div
    {...props}
    css={Styles.space}
    style={{
      '--space-gap':       gap && `${gap}px`,
      '--space-header':    header && `${header}px`,
      '--space-trailer':   trailer && `${trailer}px`,
      '--space-direction': horizontal ? 'row' : 'column'
    }}
  />
);

// const Spaced = ({ children, ...props }: SpacedProps) => {
//   const childs = useMemo(() => Children.toArray(children).filter(Boolean), [children]);

//   return (
//     <>
//       {
//         childs.map((c, i) => (
//           <Styles.Child
//             {...props}
//             key={i}
//             isHeader={i === 0}
//             isTrailer={i === childs.length - 1}
//           >{c}</Styles.Child>
//         ))
//       }
//     </>
//   );
// };

// export default Spaced;
