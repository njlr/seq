import * as seq from '../src';

test('buffer works for the empty case', () => {
  
  const actual = [] 
    |> seq.fromArray
    |> seq.buffer
    |> seq.toArray;
  
    const expected = [];

  expect(actual).toEqual(expected);
});

test('buffer works for a simple case', () => {

  const actual = [ 1, 2, 3 ] 
    |> seq.fromArray
    |> seq.buffer
    |> seq.toArray;

  const expected = [ 1, 2, 3 ];

  expect(actual).toEqual(expected);
});

test('buffer works only calls the underlying sequence once', () => {

  const g = [ 1, 2, 3 ]
    |> seq.fromArray
    |> seq.once
    |> seq.buffer;

  const a = g
    |> seq.toArray;

  const b = g
    |> seq.toArray;
  
  const expected = [ 1, 2, 3 ];

  expect(a).toEqual(expected);
  expect(b).toEqual(expected);
});
