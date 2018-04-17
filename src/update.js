/** 
 * Takes an iterable and returns a new iterable where
 * the nth element has been updated with the given function.  
 * This function is curried. 
 * @param {Number} n The index of the element to replace. 
 * @param {Function} f The update function. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const update = (n, f) => xs => ({
  [Symbol.iterator]: function * () {
    let i = 0;
    for (const x of xs) {
      if (i == n) {
        yield f(x);
      } else {
        yield x;
      }
      i++;
    }
  }
});
