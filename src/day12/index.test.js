const { describe, it, expect, afterEach } = require("@jest/globals");
const { timeLimit } = require("./index");
jest.useFakeTimers();
describe("2637. Promise Time Limit", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });
  it("returns the result of a function that finishes before cutoff", () => {
    async function f() {
      return new Promise((res) => {
        setTimeout(() => res("1"), 1);
      });
    }
    const result = timeLimit(f, 3)();
    jest.advanceTimersByTime(1);

    expect(result).resolves.toBe("1");
  });
  it('returns "Time Limit Exceeded" if after cutoff', () => {
    async function f() {
      return new Promise((res) => {
        setTimeout(() => res("1"), 5);
      });
    }
    const result = timeLimit(f, 3)();
    jest.advanceTimersByTime(5);

    expect(result).rejects.toBe("Time Limit Exceeded");
  });
});
