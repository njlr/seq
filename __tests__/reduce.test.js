import * as seq from '../src';

test('reduce works for a simple case 1', () => {

  const actual = [ 1, 2, 3 ] 
    |> seq.reduce(0, (s, x) => s + x);
  
  const expected = 6;

  expect(actual).toEqual(expected);
});

test('reduce works for a simple case 2', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> seq.reduce('', (s, x) => s + x);
  
  const expected = 'abc';

  expect(actual).toEqual(expected);
});

test('reduce works for the empty case', () => {

  const actual = [] 
    |> seq.reduce(0, (s, x) => s + x);
  
  const expected = 0;

  expect(actual).toEqual(expected);
});
