/** 
 * Given an iterable returns a new iterable that repeats it forever. 
 * Take care, since the resulting iterable is infinite. 
 * @param {Object} xs The iterable to repeat.
 * @returns {Object}
 */
export const forever = xs => {
  if (!xs) {
    throw new TypeError('xs must be defined');
  }
  return {
    [Symbol.iterator]: function * () {
      while (true) {
        yield * xs; 
      }
    }
  };
};
