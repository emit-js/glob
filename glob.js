/*prettier-ignore*/
"use strict"

var globWithCallback = require("glob"),
  promisify = require("util").promisify

var globLib = promisify(globWithCallback)

module.exports = function(dot, opts) {
  if (dot.state.glob) {
    return
  }

  opts = opts || {}
  dot.state.glob = opts

  dot.any("glob", glob)
}

function glob(prop, arg, dot) {
  var opts = Object.assign({}, dot.state.glob, arg)

  return globLib(arg.pattern, opts).then(function(out) {
    if (arg.save) {
      return dot.set(prop, "glob", { arg: out })
    } else {
      return out
    }
  })
}
