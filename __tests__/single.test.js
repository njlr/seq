import * as seq from '../src';

test('single works as expected', () => {
  expect([ 1 ] |> seq.single).toEqual(1);
  expect([ 'a' ] |> seq.single).toEqual('a');
});

test('single throws for an empty sequence', () => {
  expect(() => [] |> seq.single).toThrow();
});

test('single throws for sequences longer than 1', () => {
  expect(() => [ 1, 2 ] |> seq.single).toThrow();
  expect(() => [ 1, 2, 3 ] |> seq.single).toThrow();
});
