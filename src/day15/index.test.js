const { expect, describe, it, beforeEach } = require("@jest/globals");

const { debounce } = require("./index");

describe("", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it("calls the second function and cancels the first", () => {
    const func1 = jest.fn();
    let i = 0;
    let debounced = debounce(func1, 100);
    debounced(++i);
    setTimeout(() => debounced(++i), 50);
    jest.runAllTimers();
    expect(func1).toHaveBeenCalledTimes(1);
    expect(func1).toHaveBeenCalledWith(2);
  });

  it("calls the second function and cancels the first", () => {
    const func1 = jest.fn();
    let debounced = debounce(func1, 50);
    setTimeout(() => debounced(1), 50);
    setTimeout(() => debounced(2), 75);

    jest.runAllTimers();
    expect(func1).toHaveBeenCalledTimes(1);
    expect(func1).toHaveBeenCalledWith(2);
  });
});
