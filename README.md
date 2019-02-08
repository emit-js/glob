# @dot-event/glob

[dot-event](https://github.com/dot-event/dot-event#readme) file glob

![glob](glob.gif)

## Install

```bash
npm install dot-event @dot-event/glob
```

## Setup

```js
const dot = require("dot-event")()
require("@dot-event/glob")(dot)
```

## Usage

```js
const paths = await dot.glob({ pattern: "*.js" })
```

## Options

| Option    | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `pattern` | Glob pattern                                                           |
| `save`    | Save glob output to [store](https://github.com/dot-event/store#readme) |

See [node-glob](https://github.com/isaacs/node-glob) for available glob options.

## Credit

This library uses [node-glob](https://github.com/isaacs/node-glob) under the hood.
