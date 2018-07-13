import { sum, min } from '../helpers';

it('sum should add 2 numbers together.', () => {
  const expected = 20;
  expect(sum(10, 10)).toBe(expected);
});
