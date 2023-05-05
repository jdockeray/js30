const { createHelloWorld } = require("./index.js");
const { test } = require("@jest/globals");

test("returns hello world", () => {
  expect(createHelloWorld()()).toEqual("Hello World");
});
