export const skipUntil = f => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => () => function * () {
    let shouldYield = false;
    for (const x of xs()()) {
      if (shouldYield) {
        yield x;
      } else {
        if (f(x)) {
          yield x;
          shouldYield = true;
        }
      }
    }
  };
};
