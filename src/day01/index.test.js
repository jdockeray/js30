const { createHelloWorld } = require("./index.js");
const { test, expect } = require("@jest/globals");

test("returns hello world", () => {
  expect(createHelloWorld()()).toEqual("Hello World");
});
