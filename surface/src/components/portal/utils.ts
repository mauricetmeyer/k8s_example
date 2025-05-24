/**
 * utils.ts
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

export const getParent = () => {
  const parentElement = document.querySelector<HTMLElement>('body > .portals');
  if (!parentElement) {
    const parent = document.createElement('div');
    parent.setAttribute('class', 'portals');
    document.body.appendChild(parent);
    return parent;
  }
  return parentElement;
};

export const createContainer = (zIndex: number) => {
  const container = document.createElement('div');
  container.className    = 'portal';
  container.style.zIndex = `${zIndex}`;
  return container;
};

export const appendContainer = (container: HTMLElement) => {
  if (!container.parentElement) {
    getParent().appendChild(container);
  }
};

export const removeContainer = (container: HTMLElement) => {
  getParent().removeChild(container);
};