/** 
 * Splits an iterable into chunks of a given size. 
 * The last chunk may be less than the specified size. 
 * This function is curried. 
 * @param {Number} n The chunk size.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const chunk = n => {
  if (typeof n !== 'number') {
    throw new TypeError('n must be a number');
  }
  if (n <= 0) {
    throw new RangeError('n must be greater than zero');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      let ys = [];
      for (const x of xs) {
        ys.push(x);
        if (ys.length == n) {
          yield ys;
          ys = [];
        }
      }
      if (ys.length > 0) {
        yield ys;
      }
    }
  });
};
