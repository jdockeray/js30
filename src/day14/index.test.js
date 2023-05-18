const {
  expect,
  describe,
  it,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
} = require("@jest/globals");

const { TimeLimitedCache } = require("./index");
// Date.UTC(year, monthIndex, day, hour, minute, second, millisecond)
const now = Date.UTC(2023, 1, 1, 1, 1, 1, 1);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe("2622. Cache With Time Limit", () => {
  describe("set", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(now);
    });
    it("sets key with a created at", () => {
      const timeCache = new TimeLimitedCache();
      timeCache.set(1, 2, 0);

      expect(timeCache.cache).toEqual({
        1: {
          value: 2,
          expiresAt: now.valueOf(),
        },
      });
    });

    it("returns false when past timeout", () => {
      const timeCache = new TimeLimitedCache();
      timeCache.set(1, 2, 0);

      sleep(400);
      jest.runAllTimers();

      return expect(timeCache.set(1, 2, 0)).toEqual(false);
    });
  });
  describe("get", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(now);
    });
    it("returns key if unexpired", () => {
      const timeCache = new TimeLimitedCache();
      timeCache.set(1, 2, 10);

      return expect(timeCache.get(1)).toEqual(2);
    });
    it("returns -1 if expired", () => {
      const timeCache = new TimeLimitedCache();
      timeCache.set(1, 2, 0);

      sleep(400);
      jest.runAllTimers();

      return expect(timeCache.get(1)).toEqual(-1);
    });
  });
  describe("count", () => {
    it("counts unexpired", () => {
      const timeCache = new TimeLimitedCache();
      timeCache.set(1, 2, 10);

      return expect(timeCache.count()).toEqual(1);
    });
    it("doesnt count expired", () => {
      const timeCache = new TimeLimitedCache();
      timeCache.set(1, 2, 0);

      sleep(400);
      jest.runAllTimers();

      return expect(timeCache.count()).toEqual(0);
    });
  });
});
