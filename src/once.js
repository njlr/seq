export const once = xs => {
  if (!xs) {
    throw new TypeError('xs must be defined');
  }
  let hasBeenCalled = false;
  return () => function * () {
    if (hasBeenCalled) {
      throw new Error('once(xs) may only be iterated once. ');
    } else {
      hasBeenCalled = true;
    }
    yield * xs()();
  };
};
