/**
 * Tests for main functionality
 */

const { greeting } = require('../src/main');

test('greeting returns correct message', () => {
  expect(greeting()).toBe('Hello, world!');
});
