const stringLength = require('./stringlength.js');

test('Check if number of character is between 1 and 10:', () => {
  expect(stringLength('AliBello')).toBeGreaterThan(0);
  expect(stringLength('AliBello')).toBeLessThan(11);
});

test('Check if number of character is NOT between 1 and 10:', () => {
  expect(() => { stringLength('1234567890000'); }).toThrow('characters no within range');
});
