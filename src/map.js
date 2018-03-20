export const map = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => () => function * () {
    for (const x of xs()()) {
      yield f(x);
    };
  };
};
