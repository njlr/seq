/** 
 * Given an array, returns an iterable with equivalent elements. 
 * You should not mutate the array used to create the iterable. 
 * @param {Object} xs The array.
 * @returns {Object}
 */
export const fromArray = xs => {
  if (!Array.isArray(xs)) {
    throw new TypeError('xs must be an array');
  }
  return {
    [Symbol.iterator]: function * () {
      yield * xs;
    }
  };
};
