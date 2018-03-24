/** 
 * Returns the last element of an iterable that satisfies a given predicate.   
 * This function will throw an error if no satisfactory element is found.  
 * This function is curried. 
 * @param {Object=} f The predicate, defaults to always true.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const last = (f = _ => true) => xs => {
  let hasFoundValue = false;
  let y = null;
  for (const x of xs) {
    if (f(x)) {
      hasFoundValue = true;
      y = x;
    }
  }
  if (hasFoundValue) {
    return y;
  }
  throw new Error('Expected at least one element');
};
