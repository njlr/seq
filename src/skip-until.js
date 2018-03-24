/** 
 * Skips elements from an iterable for as long as the elements satisfy a given condition. 
 * The first element that satisfies the condition will be included. 
 * This function is curried. 
 * @param {Object} f The function.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const skipUntil = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      let shouldYield = false;
      for (const x of xs) {
        if (shouldYield) {
          yield x;
        } else {
          if (f(x)) {
            yield x;
            shouldYield = true;
          }
        }
      }
    }
  });
};
