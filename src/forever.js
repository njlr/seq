export const forever = xs => {
  if (!xs) {
    throw new TypeError('xs must be defined');
  }
  return {
    [Symbol.iterator]: function * () {
      while (true) {
        yield * xs; 
      }
    }
  };
};
