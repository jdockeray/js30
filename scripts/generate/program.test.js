const {
  expect,
  describe,
  it,
  beforeEach,
  afterEach,
} = require("@jest/globals");
const program = require("./program");

describe("program", () => {
  let hold;
  beforeEach(() => {
    hold = process.argv;
  });
  afterEach(() => {
    process.argv = hold;
  });
  it("parses the day", () => {
    process.argv = "node index.js 12".split(" ");
    program.parse();
    expect(program.args).toEqual(["12"]);
  });

  it("throws an error if day is not set", () => {
    process.argv = "node index.js".split(" ");

    expect(program.parse).toThrow();
  });
});
