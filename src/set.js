/** 
 * Takes an iterable and returns a new iterable where
 * the nth element has been set to a given value.  
 * This function is curried. 
 * @param {Number} n The index of the element to replace. 
 * @param {Object} value The new value. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const set = (n, value) => xs => ({
  [Symbol.iterator]: function * () {
    let i = 0;
    for (const x of xs) {
      if (i == n) {
        yield value;
      } else {
        yield x;
      }
      i++;
    }
  }
});
