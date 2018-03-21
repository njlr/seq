/** 
 * Appends an object to the end of an iterable sequence. 
 * This function is curried. 
 * @param {Object} x The object to append.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const append = x => xs => ({
  [Symbol.iterator]: function * () {
    yield * xs;
    yield x;
  }
});
