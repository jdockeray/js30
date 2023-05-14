/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = function (fn) {
  const limit = fn.length;
  let savedArgs = [];
  return function curried(...args) {
    savedArgs = [...savedArgs, ...args];
    if (savedArgs.length === limit) {
      const tmp = savedArgs;
      savedArgs = [];
      return fn(...tmp);
    }
    return curried;
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

module.exports = {
  curry,
};
