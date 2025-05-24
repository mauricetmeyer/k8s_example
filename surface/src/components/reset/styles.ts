/**
 * styles.ts
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

import { css } from '@emotion/react';

export const styles = css`
  :root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, [id="root"] {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    flex-direction: column;
  }

  html {
    min-height: 100%;
    box-sizing: border-box;
    text-size-adjust: 100%;
    background-color: var(--background-default);
  }

  body {
    color:       var(--typography-default);
    font-size:   14px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", "Apple Color Emoji", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    font-feature-settings: 'kern';
    overflow-x: hidden;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }


  html,
  Body,
  button,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  small,
  ol,
  ul,
  li,
  hr,
  form,
  label,
  article,
  canvas,
  footer,
  header,
  head,
  section,
  audio,
  video,
  input,
  textarea,
  pre,
  code,
  dt,
  dd {
    margin: 0;
    border: 0;
    padding: 0;
  }

  a,
  input,
  button,
  select,
  textarea,
  div[contenteditable] {
    font-family: inherit;
    border: 0;
    outline: none;
    appearance: none;
    background: transparent;
  }

  a {
    text-decoration: none;
  }
  
  li {
    list-style: none
  }

  img, video {
    display:   block;
    height:    auto;
    max-width: 100%;
  }
  
  audio, canvas, iframe, img, svg, video {
    vertical-align: middle;
  }

  main {
    display:block
  }

  table {
      border-spacing: 0;
      border-collapse: collapse;
      table-layout: fixed;
      line-height: normal;
  }
  
  .portals { position: absolute; }
  .portal { position: relative; }
`;
