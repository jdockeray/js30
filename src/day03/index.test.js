const { expect, describe, it } = require("@jest/globals");

const { createCounter } = require("./index");

describe("", () => {
  it("", () => {
    const counter = createCounter(5);
    let i;
    i = counter.increment();
    expect(i).toBe(6);
    i = counter.reset();
    expect(i).toBe(5);
    i = counter.decrement();
    expect(i).toBe(4);
  });
});
