/** 
 * Tests if a function holds true for all elements in an iterable. 
 * Always returns true for an empty iterable. 
 * This function is curried. 
 * @param {Function} f The condition to test for each element.
 * @param {Object} xs The iterable.
 * @returns {boolean}
 */
export const all = (f = x => true) => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => {
    for (const x of xs) {
      if (!f(x)) {
        return false;
      }
    }
    return true;
  };
};
