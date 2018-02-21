export const reduce = function(s, f, xs) {
  for (const x of xs) {
    s = f(s, x);
  }
  return s;
};
