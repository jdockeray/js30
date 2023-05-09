const { expect, describe, it } = require("@jest/globals");
const { filter } = require("./index");

describe("", () => {
  it("filters elements using filter function", () => {
    expect(filter([0, 10, 20, 30], (n) => n > 10)).toEqual([20, 30]);
  });
});
