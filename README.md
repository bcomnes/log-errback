# log-errback

[![Greenkeeper badge](https://badges.greenkeeper.io/bcomnes/log-errback.svg)](https://greenkeeper.io/)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/log-errback.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/log-errback
[travis-image]: https://img.shields.io/travis/bcomnes/log-errback.svg?style=flat-square
[travis-url]: https://travis-ci.org/bcomnes/log-errback
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Logs the arguments from an errorback. A useful callback probe.

## Install

```
npm install log-errback
```

## Usage

```js
var logErrback = require('log-errback')

asyncFunction(logErrback.sync) // logs out the arguments it receives and does not call a callback

// say you have the following

asyncFunction(function(err, results) {
  if (err) throw(err)
  // do stuff with results
})

// Its not working and you want to dig into the callback arguments, you can insert
// logErrBack to log out whats getting passed into the callback

asyncFunction(logErrback(function(err, results) {
  if (err) throw(err)
  // do stuff with results
}))
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE)
