/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const throttle = function (fn, t) {
  let params = [];
  let throttling = false;
  function run() {
    if (params.length === 1) {
      fn(...params.shift());
    }

    setTimeout(() => {
      throttling = false;
      if (params.length === 1) {
        throttling = true;

        run();
      }
    }, t);
  }

  return function (...args) {
    params[0] = args;
    if (!throttling) {
      throttling = true;
      run();
    }
  };
};
module.exports = {
  throttle,
};
