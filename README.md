# @emit-js/glob

[emit](https://github.com/emit-js/emit#readme) file glob

![glob](glob.gif)

## Install

```bash
npm install @emit-js/emit @emit-js/glob
```

## Setup

```js
const emit = require("@emit-js/emit")()
require("@emit-js/glob")(emit)
```

## Usage

```js
const paths = await emit.glob({ pattern: "*.js" })
```

## Options

| Option    | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| `pattern` | Glob pattern                                                         |
| `save`    | Save glob output to [store](https://github.com/emit-js/store#readme) |

See [node-glob](https://github.com/isaacs/node-glob) for available glob options.

## Credit

This library uses [node-glob](https://github.com/isaacs/node-glob) under the hood.
