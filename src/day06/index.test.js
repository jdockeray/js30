const { expect, describe, it } = require("@jest/globals");

const { reduce } = require("./index");

describe("reduce", () => {
  it("sums nums", () => {
    const nums = [1, 2, 3, 4];
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    const init = 0;
    expect(reduce(nums, fn, init)).toBe(10);
  });
});
