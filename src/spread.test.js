import * as seq from '../src';

test('spread syntax works for a simple case', () => {

  const xs = [ 1, 2, 3, 4 ] 
    |> seq.fromArray
    |> seq.map(x => x * 2);

  const actual = [ ...xs ];
  
  const expected = [ 2, 4, 6, 8 ];

  expect(actual).toEqual(expected);
});
