export const all = (f = x => true) => xs => {
  for (const x of xs) {
    if (!f(x)) {
      return false;
    }
  }
  return true;
};
