var test = require('tape')
var logErrback = require('.')

test('errorbacks results get logged', function (t) {
  function resCb (err, results1, results2) {
    t.error(err, 'Error should propigate')
    t.pass('should log results')
    t.end()
  }
  fakeAsyncRes(logErrback(resCb))
})

test('errorbacks errors get logged', function (t) {
  function errCb (err, results1) {
    t.ok(err, 'error gets passed')
    t.ok(results1, 'results get passed')
    t.end()
  }
  fakeAsyncErr(logErrback(errCb))
  t.pass('logging is syncd to the the cb')
})

test('sync method works', function (t) {
  fakeAsyncRes(logErrback.sync)
  fakeAsyncErr(logErrback.sync)
  t.pass('async order worked')
  t.end()
})

function fakeAsyncRes (cb) {
  process.nextTick(cb, null, 'Im a result', 'Im more results')
}

function fakeAsyncErr (cb) {
  process.nextTick(cb, new Error('Fake Error'), 'Dont trust the results')
}
