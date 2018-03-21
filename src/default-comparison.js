export const defaultComparison = (i, j) => {
  if (i == j) {
    return 0;
  }
  if (i > j) {
    return 1;
  }
  return -1;
};
