const { expect, describe, it } = require("@jest/globals");
const { createCounter } = require(".");

describe("", () => {
  it("", () => {
    const counter = createCounter(10);

    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });
});
