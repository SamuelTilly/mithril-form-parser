var m = require('mithril/render/hyperscript')
var test = require('tape')
var formParser = require('../index')

test('parse multiple radio buttons with same names', function (t) {
  t.deepEqual(formParser(m('div', [
    m('input', { type: 'radio', name: 'vehicle', value: 'car' }),
    m('input', { type: 'radio', name: 'vehicle', value: 'train', checked: true }),
    m('input', { type: 'radio', name: 'vehicle', value: 'bike' })
  ])), { vehicle: 'train' })

  t.end()
})

test('parse radio buttons without value attribute', function (t) {
  t.deepEqual(formParser(m('div', [
    m('input', { type: 'checkbox', name: 'car' }),
    m('input', { type: 'checkbox', name: 'train', checked: true }),
    m('input', { type: 'checkbox', name: 'bike' })
  ])), { train: true })

  t.end()
})
