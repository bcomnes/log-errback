var sliced = require('sliced')

module.exports = function postLog (cb) {
  var callback = typeof cb === 'function' ? cb : noop
  return function logErrback (err, results /* ... */) {
    var args = sliced(arguments)
    var error = args.shift()
    if (error) console.error(err)
    args.forEach(function log (res) {
      console.log(res)
    })
    callback.apply(null, arguments)
  }
}

module.exports.sync = function logErrback (err, results /* ... */) {
  var args = sliced(arguments)
  var error = args.shift()
  if (error) console.error(err)
  args.forEach(function log (res) {
    console.log(res)
  })
}

function noop () {}
