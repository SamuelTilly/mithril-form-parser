var m = require('mithril/render/hyperscript')
var test = require('tape')
var formParser = require('../index')

test('parse checkboxes', function (t) {
  t.deepEqual(formParser(m('div', [
    m('input', { type: 'checkbox', name: 'vehicle', value: 'car' }),
    m('input', { type: 'checkbox', name: 'vehicle', value: 'train', checked: true }),
    m('input', { type: 'checkbox', name: 'vehicle', value: 'bike' })
  ])), { vehicle: 'train' })

  t.end()
})

test('parse checkboxes with multiple selections', function (t) {
  t.deepEqual(formParser(m('div', [
    m('input', { type: 'checkbox', name: 'vehicle', value: 'car', checked: true }),
    m('input', { type: 'checkbox', name: 'vehicle', value: 'train', checked: true }),
    m('input', { type: 'checkbox', name: 'vehicle', value: 'bike', checked: true })
  ])), { vehicle: [ 'car', 'train', 'bike' ] })

  t.end()
})

test('parse checkbox without value attribute', function (t) {
  t.deepEqual(formParser(m('div', [
    m('input', { type: 'checkbox', name: 'car' }),
    m('input', { type: 'checkbox', name: 'train', checked: true }),
    m('input', { type: 'checkbox', name: 'bike' })
  ])), { train: true })

  t.end()
})
