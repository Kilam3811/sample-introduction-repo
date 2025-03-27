/**
 * Main application entry point
 */

function greeting() {
  return 'Hello, world!';
}

function initialize() {
  console.log(greeting());
}

module.exports = {
  greeting,
  initialize
};
