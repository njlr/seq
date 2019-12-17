import { isIterable } from './is-iterable.js';
import { fromGenerator } from './from-generator.js';

/**
 * Puts a given item between each element in a sequence.
 * @param {Object=} s The seperator item.
 * @param {Object} xs The iterable to intercalate.
 * @returns {Object}
 */
export const intercalate = s => xs => {
  if (!isIterable) {
    throw new TypeError('xs must be an iterable');
  }

  return fromGenerator(function * () {
    let isFirst = true;

    for (const x of xs) {
      if (isFirst) {
        isFirst = false;
      } else {
        yield s;
      }

      yield x;
    }
  });
};
