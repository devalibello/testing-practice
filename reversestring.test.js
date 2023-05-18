const reverseString = require('./reversestring.js');

test('Reverse the letters in a string', () => {
  expect(reverseString('Hello')).toBe('olleH');
});
