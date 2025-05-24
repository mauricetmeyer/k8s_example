/**
 * fuzzy.ts
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


const REGEX_IS_GAP          = /[\\\/_+.#"@\[\(\{&]/;
const REGEX_IS_SPACE        = /[\s-]/;

const SCORE_WORD_START      = 1;
const SCORE_COVERAGE        = 1;
const SCORE_SEQUENTIAL      = .9;
const SCORE_SPACE_JUMP      = .9;
const SCORE_NON_SPACE_JUMP  = .8;
const PENALTY_JUMP          = .3;
const PENALTY_SKIPPED       = .99;
const PENALTY_NOT_COMPLETE  = .9;
const PENALTY_CASE_MISMATCH = .9999;

/**
 * **INTERNAL**
 * Fuzzy match recursively
 *
 * @param  string str
 * @param  string query
 * @return number
 */
function fuzzyRecursive (str: string, query: string, strIdx: number, queryIdx: number) : number
{
  /**
   * Check if we reached the end of the query string */
  if (queryIdx === query.length)
  {
    /**
     * If we reached the string's end too we give it a BONUS otherwise a penalty
     * is returned. */
    return strIdx === str.length ? SCORE_COVERAGE : PENALTY_NOT_COMPLETE;
  }

  const normalizedStr   = str.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  const queryChar       = normalizedQuery.charAt(queryIdx);

  let idx   = normalizedStr.indexOf(queryChar, strIdx);
  let score = 0;
  while (idx >= 0)
  {
    const curr = fuzzyRecursive(str, query, idx + 1, queryIdx + 1);
    if (curr > score)
    {
      if (idx === strIdx)
      {
        /**
         * String matches query, if it's the first character
         * we'll score it even higher. */
        score *= (queryIdx === 0 && idx === 0) ? SCORE_WORD_START : SCORE_SEQUENTIAL;
      }
      else if (REGEX_IS_GAP.test(str.charAt(idx - 1)))
      {
        score *= SCORE_NON_SPACE_JUMP;
        if (strIdx > 0)
        {
          const distance = idx - strIdx;
          score *= Math.pow(PENALTY_SKIPPED, distance);
        }
      }
      else if (REGEX_IS_SPACE.test(str.charAt(idx - 1)))
      {
        score *= SCORE_SPACE_JUMP;
        if (strIdx > 0)
        {
          const distance = idx - strIdx;
          score *= Math.pow(PENALTY_SKIPPED, distance);
        }
      }
      else
      {
        /**
         * We just jumped characters */
        score *= PENALTY_JUMP;
        if (strIdx > 0)
        {
          const distance = idx - strIdx;
          score *= Math.pow(PENALTY_SKIPPED, distance);
        }
      }

      /**
       * Handle case mismatch */
      if (str.charAt(idx) !== query.charAt(queryIdx))
      {
        score *= PENALTY_CASE_MISMATCH;
      }
    }

    score = curr > score ? curr : score;
    idx   = normalizedStr.indexOf(queryChar, idx + 1);
  }

  return score;
}

/**
 * Fuzzy matching a string
 *
 * Example:
 * ```
 * const score = fuzzy('unicorn on a tree', 'tr');
 * ```
 *
 * @param  string str
 * @param  string query
 * @return number
 */
export function fuzzy (str: string, query: string) : number
{
  return fuzzyRecursive(str, query, 0, 0);
}
