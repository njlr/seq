import { defaultComparison } from './default-comparison.js';
import { toArray } from './to-array.js';

/** 
 * Given an iterable, returns a new iterable with the elements sorted. 
 * Note that this function must not be called on an infinite iterable. 
 * @param {Object=} c The comparison function to use.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const sorted = (c = defaultComparison) => {
  if (!c) {
    throw new TypeError('c must be defined');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      const ys = [ ...xs ];
      ys.sort(c);
      yield * ys;
    }
  });
};
