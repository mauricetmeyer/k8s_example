/**
 * types.ts
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

export interface Deferred<T> extends Promise<T>
{
  reject (reason?: any): void;
  resolve (value?: T | PromiseLike<T>): void;
}

export interface DeferFn
{
  <T>() : Deferred<T>;
}

export type WriteonlyMap<K, V> = {
  set (key: K, value: V) : void;
}

export type StrictPick<T, K extends keyof T> = Pick<T, K> & Partial<Record<Exclude<keyof T, K>, never>>;
export interface FilterFn
{
  <T, K extends keyof T>(obj: T, ...keys: K[]) : StrictPick<T, K>
}

export interface TimeoutFn<T>
{
  () : Promise<T>
}

export interface MeasureFn
{
  () : Promise<void>
}

export interface RetryableFn<T>
{
  () : Promise<T> | T
}

export type ErrorTuple<T>    = [T, null];
export type SuccessTuple<T>  = [null, T];
export type ResultTuple<Type = any, Error = unknown> = ErrorTuple<Error> | SuccessTuple<Type>;
export type Cookie = {
  value:     string | number;
  path?:     string;
  domain?:   string;
  maxAge?:   number;
  secure?:   boolean;
  httpOnly?: boolean;
  sameSite?: 'lax' | 'none' | 'strict';
}
