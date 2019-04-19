import * as paak from './'

test('String', () => {
  expect(paak.string('Hello World')(0)).toBe('Hello World');
});