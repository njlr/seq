/** 
 * Concatenates two iterables into one.  
 * This function is curried. 
 * @param {Object} ys The iterable to yield second.
 * @param {Object} xs The iterable to yield first.
 * @returns {Object}
 */
export const concat = ys => xs => ({
  [Symbol.iterator]: function * () {
    yield * xs;
    yield * ys;
  }
});
