const capitalize = require('./capitalize.js');

test('Test if the first character is capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});