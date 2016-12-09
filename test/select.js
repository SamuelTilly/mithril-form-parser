var m = require('mithril/render/hyperscript')
var test = require('tape')
var formParser = require('../index')

test('parse a single select', function (t) {
  t.deepEqual(formParser(m('select', { name: 'vehicle', value: 'car' })),
    { vehicle: 'car' })

  t.end()
})
