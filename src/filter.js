/** 
 * Takes an iterable and returns a new one including only elements that satisfy a given predicate.  
 * The order of the iterable is maintained. 
 * This function is curried. 
 * @param {Object} f The predicate.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const filter = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      for (const x of xs) {
        if (f(x)) {
          yield x;
        }
      }
    }
  });
};
