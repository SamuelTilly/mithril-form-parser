module.exports = function (vnode) {
  var result = {}

  function parser (res, vnode) {
    var attrs = vnode.attrs || {}

    function append (name, value) {
      (res[name] = res[name] || []).push(value)
    }

    if (!(attrs.name == null)) {
      if (['checkbox', 'radio'].indexOf(attrs.type) > -1) {
        if (attrs.checked) {
          if (!(attrs.value == null)) {
            append(attrs.name, attrs.value)
          } else {
            append(attrs.name, true)
          }
        }
      } else if (!(attrs.value == null)) {
        append(attrs.name, attrs.value)
      }
    }

    (vnode.children || []).reduce(parser, res)

    return res
  }

  parser(result, vnode)

  Object.keys(result).forEach(function (key) {
    if (result[key].length === 1) result[key] = result[key][0]
  })

  return result
}
