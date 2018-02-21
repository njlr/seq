export const skipUntil = f => function * (xs) {
  let shouldYield = false;
  for (const x of xs) {
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
