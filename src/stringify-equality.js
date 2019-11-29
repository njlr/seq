const hashCode = (x) => {
  const s = JSON.stringify(x);

  let hash = 0;
  let chr = null;

  if (s.length === 0) {
    return hash;
  }

  for (let i = 0; i < s.length; i++) {
    chr   = s.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

export const stringifyEquality = {
  hashCode,
  isEqual: (x, y) => JSON.stringify(x) === JSON.stringify(y),
};
