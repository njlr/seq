export const any = (f = x => true) => xs => {
  for (const x of xs) {
    if (f(x)) {
      return true;
    }
  }
  return false;
};
