import * as seq from '../src';

test('chunk works for the empty case', () => {
  const actual = [] 
    |> seq.chunk(3)
    |> seq.toArray;
  const expected = [];
  expect(actual).toEqual(expected);
});

test('chunk works for a simple case 1', () => {
  const actual = [ 1, 2, 3, 4, 5, 6, 7, 8 ] 
    |> seq.chunk(3)
    |> seq.toArray;
  const expected = [
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 7, 8 ],
  ];
  expect(actual).toEqual(expected);
});

test('chunk works for a simple case 2', () => {
  const actual = [ 1, 2, 3 ] 
    |> seq.chunk(5)
    |> seq.toArray;
  const expected = [
    [ 1, 2, 3 ], 
  ];
  expect(actual).toEqual(expected);
});

test('chunk works for a simple case 3', () => {
  const actual = [ 1, 2, 3 ] 
    |> seq.chunk(1)
    |> seq.toArray;
  const expected = [
    [ 1 ], [ 2 ], [ 3 ],  
  ];
  expect(actual).toEqual(expected);
});
