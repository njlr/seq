import * as seq from '../src';

test('map works for a simple case 1', () => {

  const actual = [ 0, 1, 2, 3, 4, 5, 6 ] 
    |> seq.fromArray
    |> seq.map(x => x * 2)
    |> seq.toArray;
  
  const expected = [ 0, 2, 4, 6, 8, 10, 12 ];

  expect(actual).toEqual(expected);
});

test('map works for a simple case 2', () => {

  const actual = [ 'Jack', 'Jane', 'John' ] 
    |> seq.fromArray
    |> seq.map(x => 'Hello ' + x)
    |> seq.toArray;
  
  const expected = [ 'Hello Jack', 'Hello Jane', 'Hello John' ];

  expect(actual).toEqual(expected);
});

test('map works for the empty case', () => {

  const actual = [] 
    |> seq.fromArray
    |> seq.map(x => x * 2)
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
