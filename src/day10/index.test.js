const { expect, describe, it } = require("@jest/globals");

const { curry } = require("./index");

const sum = (a, b, c) => a + b + c;
const life = () => 42;
describe("2632. Curry", () => {
  it("sum with 3 vals", () => {
    const curriedSum = curry(sum);
    expect(curriedSum(1, 1, 1)).toBe(3);
    expect(curriedSum(1, 1)(1)).toBe(3);
    expect(curriedSum(1)(1, 1)).toBe(3);
    expect(curriedSum(1)(1)(1)).toBe(3);
  });
  it("works with no args", () => {
    expect(curry(life)()).toBe(42);
  });
});
