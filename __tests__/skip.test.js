import * as seq from '../src';

test('skip works for a simple case 1', () => {

  const actual = [ 'a', 'b', 'c', 'd' ] 
    |> seq.skip(2)
    |> seq.toArray;
  
  const expected = [ 'c', 'd' ];

  expect(actual).toEqual(expected);
});

test('skip works for a simple case 2', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> seq.skip(5)
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});

test('skip works for a simple case 2', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> seq.skip(0)
    |> seq.toArray;
  
  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('skip works for the empty case', () => {

  const actual = [] 
    |> seq.skip(5)
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
