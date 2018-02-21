export const first = function(xs) {
  for (const x of xs) {
    return x;
  }
  throw new Error('Expected at least one element');
};
