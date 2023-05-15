const { expect, describe, it } = require("@jest/globals");

const { sleep } = require("./index");
jest.useFakeTimers();

describe("2621. Sleep", () => {
  it("sleeps for 1000ms", () => {
    // THIS WORKS
    const ms = 1000;
    const sleeper = sleep(ms);
    jest.advanceTimersByTime(1000);
    expect(sleeper).resolves.toBe("hello");
  });
});
