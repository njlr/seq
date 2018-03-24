/** 
 * Takes an iterable and returns a new one where each element is transformed using the given function.  
 * The order of the iterable is maintained. 
 * This function is curried. 
 * @param {Object} f The transformation function.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const map = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      for (const x of xs) {
        yield f(x);
      };
    }
  });
};
