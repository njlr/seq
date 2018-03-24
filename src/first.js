/** 
 * Returns the first element of an iterable that satisfies a given predicate.   
 * This function will throw an error if no satisfactory element is found.  
 * This function is curried. 
 * @param {Object=} f The predicate, defaults to always true.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const first = (f = _ => true) => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => {
    for (const x of xs) {
      if (f(x)) {
        return x;
      }
    }
    throw new Error('Expected at least one element');
  };
};
