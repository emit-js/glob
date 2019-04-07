/* eslint-env jest */

var emit,
  glob = require("./glob")

beforeEach(function() {
  emit = require("@emit-js/emit")()
  glob(emit)
})

test("globs", function() {
  expect.assertions(1)
  return emit
    .glob({ pattern: "*.js" })
    .then(function(paths) {
      expect(paths).toEqual(["glob.js", "globTest.js"])
    })
})

test("globs w/ array", function() {
  expect.assertions(1)
  return emit
    .glob({ pattern: ["*.js", "*.md"] })
    .then(function(paths) {
      expect(paths).toEqual([
        "glob.js",
        "globTest.js",
        "README.md",
      ])
    })
})

test("globs w/ single element array", function() {
  expect.assertions(1)
  return emit
    .glob({ pattern: ["*.md"] })
    .then(function(paths) {
      expect(paths).toEqual(["README.md"])
    })
})
