var m = require('mithril/render/hyperscript')
var test = require('tape')
var formParser = require('../index')

test('parse without inputs', function (t) {
  t.deepEqual(formParser(m('div')), {})

  t.end()
})

test('parse a single input', function (t) {
  t.deepEqual(formParser(m('input', { name: 'password', value: '123' })),
    { password: '123' })

  t.end()
})

test('parse multiple inputs', function (t) {
  t.deepEqual(formParser(m('div', [
    m('input', { name: 'account', value: 'bengt' }),
    m('input', { name: 'password', value: '123' })
  ])), { account: 'bengt', password: '123' })

  t.end()
})

test('parse multiple inputs with same names', function (t) {
  t.deepEqual(formParser(m('div', [
    m('input', { name: 'account', value: 'bengt' }),
    m('input', { name: 'account', value: '123' })
  ])), { account: ['bengt', '123'] })

  t.end()
})

test('ignore undefined name', function (t) {
  t.deepEqual(formParser(m('input', { name: undefined, value: '123' })), {})

  t.end()
})

test('ignore undefined value', function (t) {
  t.deepEqual(formParser(m('input', { name: 'password', value: undefined })), {})

  t.end()
})

test('ignore null name', function (t) {
  t.deepEqual(formParser(m('input', { name: null, value: '123' })), {})

  t.end()
})

test('ignore null value', function (t) {
  t.deepEqual(formParser(m('input', { name: 'password', value: null })), {})

  t.end()
})

test('ignore null value', function (t) {
  t.deepEqual(
    formParser(
      m('div', [
        m('input', { name: 'field1', value: 1 }),
        null,
        m('input', { name: 'field2', value: 2 })
      ])),
    {
      field1: 1,
      field2: 2
    }
  )

  t.end()
})
