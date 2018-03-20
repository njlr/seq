export const fromArray = xs => {
  if (!Array.isArray(xs)) {
    throw new TypeError('xs must be an array');
  }
  return () => function * () {
    yield * xs;
  };
};