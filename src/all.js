export const all = (f = x => true) => {
  if (!f) {
    throw new TypeError('f must be a function');
  }
  return xs => {
    for (const x of xs()()) {
      if (!f(x)) {
        return false;
      }
    }
    return true;
  };
};
