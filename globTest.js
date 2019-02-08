/* eslint-env jest */

var dot = require("dot-event")(),
  glob = require("./glob")

beforeEach(function() {
  dot.reset()
  glob(dot)
})

test("globs", function() {
  expect.assertions(1)
  return dot
    .glob({ pattern: "*.js" })
    .then(function(paths) {
      expect(paths).toEqual(["glob.js", "globTest.js"])
    })
})
