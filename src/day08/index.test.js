const { expect, describe, it } = require("@jest/globals");
const { once } = require("./index");
describe("2629. Function Composition", () => {
  it("returns a function when called once", () => {
    const fn = () => {
      return "called";
    };
    expect(once(fn)()).toBe("called");
  });
  it("returns undefined on the second call", () => {
    const fn = () => {
      return "called";
    };

    const term = once(fn);
    term(); // first call
    expect(term()).toBe(undefined);
  });
});
