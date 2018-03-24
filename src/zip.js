/** 
 * Combines two iterables into one by pairing elements. 
 * Each pair is a two element array. 
 * The longer of the two iterables will be truncated to match the length of the shorter one.  
 * This function is curried. 
 * @param {Object} ys The iterable whose elements will be the second element of the pairs.
 * @param {Object} xs The iterable whose elements will be the first element of the pairs.
 * @returns {Object}
 */
export const zip = ys => {
  if (!ys[Symbol.iterator]) {
    throw new TypeError('ys must be iterable');
  }
  return xs => {
    if (!xs[Symbol.iterator]) {
      throw new TypeError('xs must be iterable');
    }
    return {
      [Symbol.iterator]: function * () {
        const xsGenerator = xs[Symbol.iterator]();
        const ysGenerator = ys[Symbol.iterator]();
        while (true) {
          const x = xsGenerator.next();
          const y = ysGenerator.next();
          if (x.done || y.done) {
            break;
          }
          yield [ x.value, y.value ];
        }
      }
    };
  };
};
