/**
 * rollup.config.js
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

import path        from 'path';
import json        from '@rollup/plugin-json';
import alias       from '@rollup/plugin-alias';
import commonjs    from '@rollup/plugin-commonjs';
import typescript  from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser }  from 'rollup-plugin-terser';

const INPUT      = path.join('src');
const OUTPUT     = path.join('dist');
const resolveDir = dir => path.resolve(__dirname, INPUT, dir);

export default [
  {
    treeshake: true,
    input: resolveDir('index.ts'),
    output: [
      {
        dir: OUTPUT,
        format:         "cjs",
        entryFileNames: "index.js",
        sourcemap: true
      },
    ],
    external: ['pg', 'typeorm', 'protobufjs'],
    plugins: [
      alias({
        entries: [
          {
            find: '~',
            replacement: path.resolve(__dirname, INPUT),
          }
        ],
      }),

      typescript(),
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      json(),
      terser()
    ],
  }
];
