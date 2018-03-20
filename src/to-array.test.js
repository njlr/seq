import * as seq from '../src';

test('toArray works for a simple case', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> seq.fromArray
    |> seq.toArray;
  
  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('toArray works for the empty case', () => {

  const actual = [] 
    |> seq.fromArray
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
