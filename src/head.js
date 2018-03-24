/** 
 * Returns the first element of an iterable. 
 * If the iterable is empty then an error is thrown. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const head = xs => {
  for (const x of xs) {
    return x;
  }
  throw new Error('Expected at least one element');
};
