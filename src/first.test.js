import * as seq from '../src';

test('first works as expected', () => {
  expect([ 1 ] |> seq.fromArray |> seq.first()).toEqual(1);
  expect([ 'a', 'b', 'c' ] |> seq.fromArray |> seq.first()).toEqual('a');
});

test('first throws for an empty sequence', () => {
  expect(() => [] |> seq.fromArray |> seq.first()).toThrow();
});
