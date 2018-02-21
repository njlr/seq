import * as seq from '../src';

test('zip works for a simple case 1', () => {

  const actual = seq.zip([ 1, 2, 3 ], [ 'a', 'b', 'c' ])
    |> seq.toArray;
  
  const expected = [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ];

  expect(actual).toEqual(expected);
});

test('zip works for a simple case 2', () => {

  const actual = [ 1, 2, 3 ]
    |> (_ => seq.map(x => x * 2, _))
    |> (_ => seq.zip(_, [ 'a', 'b', 'c' ]))
    |> seq.toArray;
  
  const expected = [ [ 2, 'a' ], [ 4, 'b' ], [ 6, 'c' ] ];

  expect(actual).toEqual(expected);
});

test('zip works for a simple case 3', () => {

  const actual = seq.zip([ 1 ], [ 'a', 'b', 'c' ])
    |> seq.toArray;
  
  const expected = [ [ 1, 'a' ] ];

  expect(actual).toEqual(expected);
});

test('zip works for a simple case 4', () => {

  const actual = seq.zip([ 1, 2, 3 ], [])
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});

test('zip works for the empty case', () => {

  const actual = seq.zip([], [])
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
