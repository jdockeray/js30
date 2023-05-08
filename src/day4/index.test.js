const { expect, describe, it } = require("@jest/globals");
const { map } = require("./index");

describe("", () => {
  it("maps elements", () => {
    arr = [1, 2, 3];
    const fn = function plusone(n) {
      return n + 1;
    };
    expect(map(arr, fn)).toEqual([2, 3, 4]);
  });
});
