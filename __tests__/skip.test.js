import * as seq from '../src';

test('skip works for a simple case 1', () => {

  const actual = [ 'a', 'b', 'c', 'd' ] 
    |> (_ => seq.skip(2, _))
    |> seq.toArray;
  
  const expected = [ 'c', 'd' ];

  expect(actual).toEqual(expected);
});

test('skip works for a simple case 2', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> (_ => seq.skip(5, _))
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});

test('skip works for a simple case 2', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> (_ => seq.skip(0, _))
    |> seq.toArray;
  
  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('skip works for the empty case', () => {

  const actual = [] 
    |> (_ => seq.skip(5, _))
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
