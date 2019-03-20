/*prettier-ignore*/
"use strict"

var globWithCallback = require("glob"),
  promisify = require("util").promisify

var globLib = promisify(globWithCallback)

module.exports = function(dot) {
  if (dot.glob) {
    return
  }

  dot.any("glob", glob)
}

function glob(prop, arg, dot) {
  var opts = Object.assign({}, arg)

  return globLib(arg.pattern, opts).then(function(out) {
    if (arg.save) {
      return dot.set(prop, "glob", { arg: out })
    } else {
      return out
    }
  })
}
