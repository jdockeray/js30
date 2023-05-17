/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
const promisePool = async function (functions, n) {
  async function run(f) {
    await f();
    const next = functions.shift();
    if (next !== undefined) return run(next);
  }
  let runners = functions.splice(0, n).map(run);
  return Promise.all(runners);
};

module.exports = {
  promisePool,
};
