export const toArray = function(xs) {
  if (Array.isArray(xs)) {
    return xs;
  }
  const result = [];
  for (const x of xs) {
    result.push(x);
  }
  return result;
};
