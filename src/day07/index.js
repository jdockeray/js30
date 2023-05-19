/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
  return function (x) {
    let count = functions.length;
    while (count > 0) {
      x = functions[--count](x);
    }
    return x;
  };
};

module.exports = {
  compose,
};
