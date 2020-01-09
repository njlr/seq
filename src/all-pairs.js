import { isIterable } from './is-iterable.js';
import { fromGenerator } from './from-generator.js';

/**
 * Combines two iterables into one by pairing each element in the first with each element in the second.
 * Each pair is a two element array.
 * This function creates very long sequences for long inputs.
 * This function is curried.
 * @param {Object} xs The iterable whose elements will be the second element of the pairs.
 * @param {Object} ys The iterable whose elements will be the first element of the pairs.
 * @returns {Object}
 */
export const allPairs = xs => {
  if (!isIterable(xs)) {
    throw new TypeError('xs must be iterable');
  }

  return ys => {
    if (!isIterable(ys)) {
      throw new TypeError('ys must be iterable');
    }

    return fromGenerator(function * () {
      for (const y of ys) {
        for (const x of xs) {
          yield [ y, x ];
        }
      }
    });
  };
};
