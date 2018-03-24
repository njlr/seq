/** 
 * Given an iterable, returns a new iterable with the elements reversed. 
 * Note that this function must not be called on an infinite iterable. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const reverse = xs => ({
  [Symbol.iterator]: function * () {
    const ys = [ ...xs ];
    ys.reverse();
    yield * ys;
  }
});
