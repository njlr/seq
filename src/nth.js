/** 
 * Returns the nth element of an iterable.    
 * This function will throw an error if the iterable is not long enough.  
 * This function is curried. 
 * @param {Number} n The zero-based index of the element to return.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const nth = n => {
  if (!Number.isSafeInteger(n)) {
    throw new TypeError('n must be an integer');
  }
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  return xs => {
    let i = 0;
    for (const x of xs) {
      if (i === n) {
        return x;
      }
      i++;
    }
    throw new Error('Tried to take the ' + n + 'th element, but there were only ' + i);
  };
};
