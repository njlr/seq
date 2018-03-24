/** 
 * Given a generator function, returns an iterable with equivalent elements. 
 * @param {Object} xs The generator function.
 * @returns {Object}
 */
export const fromGenerator = f => {
  if (!f) {
    throw new TypeError('f must be a generator function');
  }
  return {
    [Symbol.iterator]: function * () {
      yield * f();
    }
  };
};
