const {
  expect,
  describe,
  it,
  beforeEach,
  afterEach,
} = require("@jest/globals");
const { existsSync } = require("fs");
const path = require("path");
const { SRC_DIR, generate, TEMPLATES_DIR, templates } = require("./generate");
const mock = require("mock-fs");

describe("generate()", () => {
  beforeEach(() => {
    const mockedDirStructure = {};
    mockedDirStructure[SRC_DIR] = {
      day1: {},
    };
    const templateDir = {};
    for (const template of templates) {
      templateDir[template.templateName] = template.slug;
    }

    mockedDirStructure[TEMPLATES_DIR] = templateDir;

    mock(mockedDirStructure);
  });
  afterEach(() => {
    mock.restore();
  });
  it("generates the directory for the provided day", () => {
    generate(0);
    expect(existsSync(path.resolve(SRC_DIR, "day0"))).toBe(true);
  });
  it("throws an error if the dir already exists", () => {
    expect(() => {
      generate(1);
    }).toThrowError("Directory already exists");
  });
  it("creates the files", () => {
    generate(0);
    expect(existsSync(path.resolve(SRC_DIR, "day0", "index.js"))).toBe(true);
  });
});
