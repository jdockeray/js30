const { expect, describe, it } = require("@jest/globals");
const { compose } = require("./index");
describe("2629. function composition", () => {
  it("composes functions r to l", () => {
    const fns = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    expect(compose(fns)(4)).toBe(65);
  });
  it("handles empty", () => {
    const fns = [];
    expect(compose(fns)(4)).toBe(4);
  });
});
