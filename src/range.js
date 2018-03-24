/** 
 * Creates an iterable of numbers from zero to the given limit. 
 * @param {Number=} n The number to count to.
 * @returns {Object}
 */
export const range = (n = Infinity) => {
  if (typeof n !== 'number') {
    throw new TypeError('n must be a number');
  }
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  return {
    [Symbol.iterator]: function * () {
      for (let i = 0; i < n; i++) {
        yield i;
      }
    }
  };
};
