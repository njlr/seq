import * as seq from '../src';

test('flatMap works for a simple case 1', () => {

  const actual = [ 0, 1, 2 ] 
    |> seq.flatMap(x => [ x, x ])
    |> seq.toArray;
  
  const expected = [ 0, 0, 1, 1, 2, 2 ];

  expect(actual).toEqual(expected);
});

test('flatMap works for a simple case 2', () => {

  const actual = [ 1, 2, 3 ] 
    |> seq.flatMap(x => [ x, -x ])
    |> seq.toArray;
  
  const expected = [ 1, -1, 2, -2, 3, -3 ];

  expect(actual).toEqual(expected);
});

test('flatMap works for the empty case', () => {

  const actual = [] 
    |> seq.flatMap(x => x * 2)
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
