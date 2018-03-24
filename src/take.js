/** 
 * Takes the first n elements of an iterable. 
 * If there are fewer than n elements in an iterable, then this has no effect. 
 * This function is curried. 
 * @param {Number} n The number of elements to take.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const take = n => {
  if (!Number.isSafeInteger(n)) {
    throw new TypeError('n must be an integer');
  }
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      let i = 0;
      for (const x of xs) {
        if (i >= n) {
          return;
        }
        yield x;
        i++;
      }
    }
  });
};
