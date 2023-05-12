/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
module.exports = {
  once,
};
