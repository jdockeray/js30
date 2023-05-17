const { expect, describe, it } = require("@jest/globals");
const { promisePool } = require("./index");

describe("2636. Promise Pool", () => {
  it("only calls the n amount of promises at first", () => {
    jest.useFakeTimers();
    const p1 = jest.fn(() => new Promise((resolve) => setTimeout(resolve)));
    const p2 = jest.fn();
    const p3 = jest.fn();

    promisePool([p1, p2, p3], 1);

    expect(p1).toHaveBeenCalledTimes(1);
    expect(p2).toHaveBeenCalledTimes(0);
    expect(p3).toHaveBeenCalledTimes(0);
  });

  it("only calls the n amount of promises at first", () => {
    jest.useFakeTimers();
    const p1 = jest.fn(() => new Promise((resolve) => setTimeout(resolve)));
    const p2 = jest.fn();
    const p3 = jest.fn();

    promisePool([p1, p2, p3], 1);

    expect(p1).toHaveBeenCalledTimes(1);
    expect(p2).toHaveBeenCalledTimes(0);
    expect(p3).toHaveBeenCalledTimes(0);

    jest.clearAllTimers();
  });

  it("calls all promises", async () => {
    const p1 = jest.fn(() => Promise.resolve());
    const p2 = jest.fn(() => Promise.resolve());
    const p3 = jest.fn(() => Promise.resolve());

    await promisePool([p1, p2, p3], 1);

    expect(p1).toHaveBeenCalledTimes(1);
    expect(p2).toHaveBeenCalledTimes(1);
    expect(p3).toHaveBeenCalledTimes(1);
  });
});
