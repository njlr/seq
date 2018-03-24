/** 
 * Prepends an object to the start of an iterable sequence. 
 * This function is curried. 
 * @param {Object} x The object to prepend.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const prepend = x => xs => ({
  [Symbol.iterator]: function * () {
    yield x;
    yield * xs;
  }
});
