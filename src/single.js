export const single = xs => {
  let hasFoundValue = false;
  let y = null;
  for (const x of xs()()) {
    if (hasFoundValue) {
      throw new Error('Expected exactly one element but found at least two');
    }
    hasFoundValue = true;
    y = x;
  }
  if (hasFoundValue) {  
    return y;
  }
  throw new Error('Expected exactly one element but found none');
};
