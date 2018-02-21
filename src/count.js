export const count = function(xs) {
  let i = 0;
  for (const _ of xs) {
    i++;
  }
  return i;
};
