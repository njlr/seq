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
