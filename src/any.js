/** 
 * Tests if a function holds true for any of the elements in an iterable. 
 * Always returns false for an empty iterable. 
 * This function is curried. 
 * @param {Function} f The condition to test for each element.
 * @param {Object} xs The iterable.
 * @returns {boolean}
 */
export const any = (f = x => true) => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => {
    for (const x of xs) {
      if (f(x)) {
        return true;
      }
    }
    return false;
  };
};
