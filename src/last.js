export const last = function(xs) {
  let hasFoundValue = false;
  let y = null;
  for (const x of xs) {
    hasFoundValue = true;
    y = x;
  }
  if (hasFoundValue) {
    return y;
  }
  throw new Error('Expected at least one element');
};
