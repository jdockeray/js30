const { expect, describe, it, beforeEach } = require("@jest/globals");
const mod = require("./index");

describe("2623. Memoize", () => {
  describe("sum", () => {
    const sum = jest.fn((a, b) => a + b);

    beforeEach(() => {
      sum.mockClear();
    });
    it("only calls sum once", () => {
      const memSum = mod.memoize(sum);
      memSum(0, 0);
      memSum(0, 0);
      expect(sum).toBeCalledTimes(1);
    });
    it("returns the value of the function", () => {
      const memSum = mod.memoize(sum);
      expect(memSum(0, 0)).toBe(0);
    });
  });
});
