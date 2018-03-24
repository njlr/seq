/** 
 * Constructs an iterable from a fixed list of elements. 
 * This function is variadic. 
 * @param {...Object} elements The elements of the iterable. 
 * @returns {Object}
 */
export const just = function() {
  const xs = [ ...arguments ];
  return ({
    [Symbol.iterator]: function * () {
      for (const x of xs) {
        yield x;
      }
    }
  });
};
