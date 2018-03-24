/** 
 * Takes elements from an iterable for as long as the elements satisfy a given condition. 
 * The first element that does satisfies the condition will not be included. 
 * This function is curried. 
 * @param {Object} f The function.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const takeWhile = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      for (const x of xs) {
        if (!f(x)) {
          return;
        }
        yield x;
      }
    }
  });
};
