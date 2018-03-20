export const fromGenerator = f => {
  if (!f) {
    throw new TypeError('f must be a generator function');
  }
  return () => function * () {
    yield * f();
  };
};
