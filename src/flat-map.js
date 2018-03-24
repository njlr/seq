/** 
 * Takes an iterable and returns a new one where each element is transformed using the given function.  
 * Unlike map, the function is expected to return an iterable for each element. These iterables are concatenated. 
 * The order of the iterable is maintained. 
 * This function is curried. 
 * @param {Object} f The transformation function that returns an iterable.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const flatMap = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      for (const x of xs) {
        yield * f(x);
      }
    }
  });
};
