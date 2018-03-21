export const reduce = (s, f) => (xs) => {
  let w = s;
  for (const x of xs) {
    w = f(w, x);
  }
  return w;
};
