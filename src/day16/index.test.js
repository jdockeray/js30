const {
  expect,
  describe,
  it,
  beforeEach,
  afterEach,
} = require("@jest/globals");

const { throttle } = require("./index");

describe("2676. Throttle", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
  it("calls the function without delay", () => {
    const func = jest.fn();
    const throttled = throttle(func, 50);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });
  it("calls the second function with delay", () => {
    const func = jest.fn();
    const throttled = throttle(func, 50);
    throttled("1");
    setTimeout(() => {
      throttled("2");
    }, 25);
    jest.advanceTimersByTime(30);
    expect(func).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenLastCalledWith("2");
  });
  it("keeps working after first delay", () => {
    const func = jest.fn();
    const throttled = throttle(func, 70);

    setTimeout(() => {
      throttled("1");
    }, 50); // lock until 125
    setTimeout(() => {
      throttled("2");
    }, 75); // should run at 125
    setTimeout(() => {
      throttled("3");
    }, 90); // overwrites 2
    // 3 runs at 125 locking until 200
    setTimeout(() => {
      throttled("4");
    }, 140); // will run at 200
    setTimeout(() => {
      throttled("5");
    }, 300);

    // at a 125 seconds the function should run with 3
    jest.advanceTimersByTime(125);
    expect(func).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(25);

    expect(func).toHaveBeenLastCalledWith("3");
    jest.advanceTimersByTime(75);
    expect(func).toHaveBeenLastCalledWith("4");
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenLastCalledWith("5");
    // at a 125 seconds the function should run with 3

    // expect(func).toHaveBeenCalledTimes(3);
    // expect(func).toHaveBeenLastCalledWith("4");
  });
});
