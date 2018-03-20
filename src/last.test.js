import * as seq from '../src';

test('last works as expected', () => {
  expect([ 1 ] |> seq.fromArray |> seq.last).toEqual(1);
  expect([ 'a', 'b', 'c' ] |> seq.fromArray |> seq.last).toEqual('c');
});

test('last throws for an empty sequence', () => {
  expect(() => [] |> seq.fromArray |> seq.last).toThrow();
});
