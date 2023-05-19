/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
  return nums.reduce(fn, init);
};

module.exports = {
  reduce,
};
