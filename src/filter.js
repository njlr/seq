export const filter = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => () => function * () {
    for (const x of xs()()) {
      if (f(x)) {
        yield x;
      }
    }
  };
};
