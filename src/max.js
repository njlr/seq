import { defaultComparison } from './default-comparison.js';
import { min } from './min.js';

/** 
 * Takes an iterable and returns the largest element, according to the given comparison. 
 * This function is curried. 
 * @param {Object=} c The comparison.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const max = (c = defaultComparison) => {
  if (!c) {
    throw new TypeError('c must be defined');
  }
  return min((i, j) => c(j, i));
};
