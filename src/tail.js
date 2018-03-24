/** 
 * Returns an iterable of all elements except the first. 
 * If the iterable is empty then an error is thrown. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const tail = xs => ({
  [Symbol.iterator]: function * () {
    let isFirst = true;
    for (const x of xs) {
      if (isFirst) {
        isFirst = false;
      } else {
        yield x;
      }
    }
    if (isFirst) {
      throw new Error('Expected at least one element');
    }
  }
});
