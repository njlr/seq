/** 
 * Takes an iterable and returns a new iterable with all of the same elements but with a memory buffer. 
 * This can be used to prevent repeated computations. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const buffer = xs => {

  if (!xs[Symbol.iterator]) {
    throw new TypeError('xs must be iterable');
  }

  const b = [];
  const g = xs[Symbol.iterator]();

  const addToBuffer = () => {
    const next = g.next();
    if (next.done) {
      return false;
    }
    b.push(next.value);
    return true;
  };

  return {
    [Symbol.iterator]: function * () {
      let i = 0;
      while (true) {
        while (i >= b.length) {
          const moreToAdd = addToBuffer();
          if (!moreToAdd) {
            return;
          }
        }
        yield b[i];
        i++;
      }
    }
  };
};
