# Mithril Form Parser

A parser for mithril forms using the virtual dom

```javascript
var formParser = require('mithril-form-parser')

module.exports = {
  view: function(vnode) {
    return m('form', {
      onsubmit: function(evt) {
        evt.preventDefault()
        vnode.attrs.onsubmit(evt, formParser(vnode))
      }
    })
  }
}
```
