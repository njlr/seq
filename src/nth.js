export const nth = n => function(xs) {
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  let i = 0;
  for (const x of xs) {
    if (i === n) {
      return x;
    }
    i++;
  }
  throw new Error('Tried to take the ' + n + 'th element, but there were only ' + i);
};
