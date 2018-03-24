/** 
 * Repeats an iterable for the given number of times. 
 * This function is curried. 
 * @param {Number} n The number of repetitions. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const repeat = n => {
  if (Number.isNaN(n) || !Number.isSafeInteger(n)) {
    throw new TypeError('n must be a number');
  }
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      for (let i = 0; i < n; i++) {
        yield * xs;
      }
    }
  });
};
