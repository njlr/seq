/** 
 * Returns the first element of an iterable that satisfies a given predicate.   
 * This function will throw an error if no satisfactory element is found.  
 * This function is curried. 
 * @param {Object=} f The predicate, defaults to always true.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const single = (f = _ => true) => xs => {
  let hasFoundValue = false;
  let y = null;
  for (const x of xs) {
    if (f(x)) {
      if (hasFoundValue) {
        throw new Error('Expected exactly one element but found at least two');
      }
      hasFoundValue = true;
      y = x;
    }
  }
  if (hasFoundValue) {  
    return y;
  }
  throw new Error('Expected exactly one element but found none');
};
