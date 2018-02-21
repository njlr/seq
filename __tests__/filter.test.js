import * as seq from '../src';

test('filter works for a simple case 1', () => {

  const actual = [ 0, 1, 2, 3, 4, 5, 6 ] 
    |> (_ => seq.filter(x => x % 2 === 0, _))
    |> seq.toArray;
  
  const expected = [ 0, 2, 4, 6 ];

  expect(actual).toEqual(expected);
});

test('filter works for the empty case', () => {

  const actual = [] 
    |> (_ => seq.filter(x => true, _))
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
