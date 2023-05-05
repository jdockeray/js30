/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

module.exports = {
  createHelloWorld,
};
