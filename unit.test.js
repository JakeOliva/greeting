var utils  = require('course-utilities');
var greet = utils.load('./Unit Testing.js', 'greet');

test('outputs the correct string', () => {
  expect(greet()).toBe("Hello there!");
  expect(greet(JOHN)).toBe("Hello there!");
});