import * as seq from '../src';

test('filter works for a simple case 1', () => {

  const actual = [ 0, 1, 2, 3, 4, 5, 6 ] 
    |> seq.filter(x => x % 2 === 0)
    |> seq.toArray;
  
  const expected = [ 0, 2, 4, 6 ];

  expect(actual).toEqual(expected);
});

test('filter works for the empty case', () => {

  const actual = [] 
    |> seq.filter(x => true)
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
