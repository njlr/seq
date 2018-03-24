/** 
 * Tests if a function holds true for none of the elements in an iterable. 
 * Always returns true for an empty iterable. 
 * By default, this function returns false for an iterable with any elements. 
 * This function is curried. 
 * @param {Function=} f The condition to test for each element.
 * @param {Object} xs The iterable.
 * @returns {boolean}
 */
export const none = (f = _ => true) => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => {
    for (const x of xs) {
      if (f(x)) {
        return false;
      }
    }
    return true;
  };
};
