/*prettier-ignore*/
"use strict"

var globWithCallback = require("glob"),
  promisify = require("util").promisify

var globLib = promisify(globWithCallback)

module.exports = function(emit) {
  if (emit.glob) {
    return
  }

  emit.any("glob", glob)
}

function glob(arg, prop, emit) {
  var opts = Object.assign({}, arg),
    pattern = arg.pattern

  if (Array.isArray(arg.pattern)) {
    if (arg.pattern.length > 1) {
      pattern = "{" + arg.pattern.join(",") + "}"
    } else {
      pattern = arg.pattern[0]
    }
  }

  return globLib(pattern, opts).then(function(out) {
    if (arg.save) {
      return emit.set(prop, "glob", out)
    } else {
      return out
    }
  })
}
