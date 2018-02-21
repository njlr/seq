import * as seq from '../src';

test('sorted works for a simple case 1', () => {

  const actual = [ 4, 3, 1, 7 ] 
    |> (_ => seq.sorted(seq.defaultComparison, _))
    |> seq.toArray;
  
  const expected = [ 1, 3, 4, 7 ];

  expect(actual).toEqual(expected);
});

test('sorted works for a simple case 2', () => {

  const actual = [ 'b', 'c', 'a' ] 
    |> (_ => seq.sorted(seq.defaultComparison, _))
    |> seq.toArray;
  
  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('sorted works for the empty case', () => {

  const actual = [] 
    |> (_ => seq.sorted(seq.defaultComparison, _))
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
