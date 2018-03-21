import * as seq from '../src';

test('min works for simple cases', () => {
  
  expect(seq.just(2) |> seq.min()).toEqual(2);
  expect(seq.just(2, 3, 1, 4) |> seq.min()).toEqual(1);
  expect(seq.just(3, 2, 1) |> seq.min()).toEqual(1);
  expect(seq.just(-2, 2) |> seq.min()).toEqual(-2);

  expect([ 2 ] |> seq.min()).toEqual(2);
  expect([ 2, 3, 1, 4 ] |> seq.min()).toEqual(1);

  expect(() => seq.just() |> seq.min()).toThrow();
});
