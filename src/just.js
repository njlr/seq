export const just = function() {
  const xs = [ ...arguments ];
  return () => function * () {
    for (const x of xs) {
      yield x;
    }
  };
};
