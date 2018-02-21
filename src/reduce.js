export const reduce = (s, f) => function(xs) {
  for (const x of xs) {
    s = f(s, x);
  }
  return s;
};
