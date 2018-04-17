/** 
 * Takes an iterable and returns a new iterable where
 * the nth element has been skipped.  
 * This function is curried. 
 * @param {Number} n The index of the element to replace. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const remove = n => xs => ({
  [Symbol.iterator]: function * () {
    let i = 0;
    for (const x of xs) {
      if (i != n) {
        yield x;
      }
      i++;
    }
  }
});
