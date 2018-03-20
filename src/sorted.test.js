import * as seq from '../src';

test('sorted works for a simple case 1', () => {

  const actual = [ 4, 3, 1, 7 ] 
    |> seq.fromArray
    |> seq.sorted()
    |> seq.toArray;
  
  const expected = [ 1, 3, 4, 7 ];

  expect(actual).toEqual(expected);
});

test('sorted works for a simple case 2', () => {

  const actual = [ 'b', 'c', 'a' ] 
    |> seq.fromArray
    |> seq.sorted()
    |> seq.toArray;
  
  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('sorted works for the empty case', () => {

  const actual = [] 
    |> seq.fromArray
    |> seq.sorted()
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});

const customComparison = function(i, j) {
  if (i == j) {
    return 0;
  }
  if (i > j) {
    return -1;
  }
  return 1;
};

test('sorted works with a custom comparison', () => {

  const actual = [ 'b', 'c', 'a' ] 
    |> seq.fromArray
    |> seq.sorted(customComparison)
    |> seq.toArray;
  
  const expected = [ 'c', 'b', 'a' ];

  expect(actual).toEqual(expected);
});
