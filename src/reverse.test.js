import * as seq from '../src';

test('reverse works for a simple case 1', () => {
  const actual = [ 1, 2, 3 ] 
    |> seq.reverse
    |> seq.toArray;
  const expected = [ 3, 2, 1 ];
  expect(actual).toEqual(expected);
});

test('reverse works for the empty case', () => {
  const actual = [] 
    |> seq.reverse
    |> seq.toArray;
  const expected = [];
  expect(actual).toEqual(expected);
});
