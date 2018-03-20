export const forever = xs => {
  if (!xs) {
    throw new TypeError('xs must be defined');
  }
  return () => function * () {
    while (true) {
      yield * xs()(); 
    }
  };
};
