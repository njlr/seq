import { defaultEquality } from './default-equality.js';

/** 
 * Takes an iterable and returns a new one with duplicate elements removed.  
 * The order of the iterable is maintained. 
 * This function is curried. 
 * @param {Object=} e The equality system to use.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const unique = (e = defaultEquality) => {
  const { hashCode, isEqual } = e;
  return xs => ({
    [Symbol.iterator]: function * () {
      const buckets = new Map();
      for (const x of xs) {
        const h = hashCode(x);
        const bucket = buckets.get(h);
        if (bucket) {
          let foundExactMatch = false;
          for (const y of bucket) {
            if (isEqual(x, y)) {
              foundExactMatch = true;
              break;
            }
          }
          if (!foundExactMatch) {
            yield x;
            bucket.push(x);
          }
        } else {
          yield x;
          buckets.set(h, [ x ]);
        }
      }
    }
  });
};
