export const isEqual = (x, y) => {
  if (x === undefined) {
    throw new ReferenceError('x must not be undefined');
  }

  if (y === undefined) {
    throw new ReferenceError('y must not be undefined');
  }

  if (x === y) {
    return true;
  }

  if (x === null) {
    return y === null;
  }

  if (typeof x === 'number') {
    return x === y;
  }

  if (typeof x === 'string') {
    return x === y;
  }

  if (typeof x === 'object') {
    if (typeof y !== 'object') {
      return false;
    }

    if (Object.entries(x).length !== Object.entries(y).length) {
      return false;
    }

    for (const [ key, value ] of Object.entries(x)) {
      if (y[key] === undefined) {
        return false;
      }

      if (!isEqual(value, y[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
};
