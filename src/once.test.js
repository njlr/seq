import * as seq from '../src';

test('once works for as expected', () => {

  const f = [ 1, 2, 3 ] 
    |> seq.once;

  expect(f() |> seq.toArray).toEqual([ 1, 2, 3 ]);
  expect(() => f() |> seq.toArray).toThrow();
  expect(() => f() |> seq.toArray).toThrow();
});
