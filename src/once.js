/** 
 * Takes an iterable and returns a new iterable that may only be iterated once. 
 * This function is useful for debugging purposes. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const once = xs => {
  if (!xs) {
    throw new TypeError('xs must be defined');
  }
  let hasBeenCalled = false;
  return {
    [Symbol.iterator]: function * () {
      if (hasBeenCalled) {
        throw new Error('once(xs) may only be iterated once. ');
      } else {
        hasBeenCalled = true;
      }
      yield * xs;
    }
  };
};
