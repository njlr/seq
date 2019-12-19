import { defaultEquality } from './default-equality.js';
import { fromGenerator } from './from-generator.js';

/**
 * Takes an iterable and returns a new one with adjacent duplicate elements removed.
 * The order of the iterable is maintained.
 * This function is curried.
 * @param {Object=} e The equality system to use.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const distinctUntilChanged = (e = defaultEquality) => xs => {
  const { hashCode, isEqual } = e;

  return fromGenerator(function * () {
    let previous = null;
    let previousHashCode = null;
    let isFirst = true;

    for (const x of xs) {
      if (isFirst) {
        yield x;

        isFirst = false;
        previous = x;
        previousHashCode = hashCode(previous);
      } else {
        if (hashCode(x) !== previousHashCode || !isEqual(x, previous)) {
          yield x;
          previous = x;
          previousHashCode = hashCode(previous);
        }
      }
    }
  });
};
