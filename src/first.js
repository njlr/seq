export const first = (f = _ => true) => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => {
    for (const x of xs) {
      if (f(x)) {
        return x;
      }
    }
    throw new Error('Expected at least one element');
  };
};
