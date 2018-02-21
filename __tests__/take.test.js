import * as seq from '../src';

test('take works for a simple case 1', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> (_ => seq.take(2, _))
    |> seq.toArray;
  
  const expected = [ 'a', 'b' ];

  expect(actual).toEqual(expected);
});

test('take works for a simple case 2', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> (_ => seq.take(5, _))
    |> seq.toArray;
  
  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('take works for a simple case 3', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> (_ => seq.take(0, _))
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});

test('take works for the empty case', () => {

  const actual = [] 
    |> (_ => seq.take(2, _))
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
