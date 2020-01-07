const hashCodeString = s => {
  let h = 0;

  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i) | 0;
  }

  return h;
};

const hashCodeNumber = x => {
  if (Number.isNaN(x)) {
    return 0;
  }

  if (!Number.isFinite(x)) {
    return 0;
  }

  return Math.trunc(x) % 2147483647; // A large prime number
};

const hashCodeArray = (xs, visited) => {
  let hash = 0;

  for (const x of xs) {
    hash = ((hash << 5) - hash) +
      hashCode(x, visited);
    hash = hash & hash;
  }

  return hash;
};

const hashCodeObject = (x, visited) => {
  let hash = 0;

  const entries = Object.entries(x);

  entries.sort(([ a ], [ b ]) =>
    a > b ?
      -1 :
      (
        a == b ?
          0 :
          1
      )
    );

  for (const [ key, value ] of entries) {
    hash = ((hash << 5) - hash) +
      hashCodeString(key) * 7 +
      hashCode(value, visited);
    hash = hash & hash;
  }

  return hash;
};

export function hashCode(x, visited = new Set()) {
  if (x === undefined) {
    throw new ReferenceError('x must not be undefined');
  }

  if (x === null) {
    return 0;
  }

  if (typeof x === 'number') {
    return hashCodeNumber(x);
  }

  if (typeof x === 'string') {
    return hashCodeString(x);
  }

  if (Array.isArray(x)) {
    visited.add(x);

    return hashCodeArray(x, visited);
  }

  if (typeof x === 'object') {
    if (visited.has(x)) {
      return 0;
    }

    visited.add(x);

    return hashCodeObject(x, visited);
  }

  return 0;
};
