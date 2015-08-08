require('whatwg-fetch')


var execute = (url, options) => {
  options = options || {
    'Accept-Encoding': 'application/json'
  }
  options.credentials = 'same-origin'
  return fetch(url, options)
}


class http {
  static get(url, options) {
    options = options || {}
    options.method = 'get'
    return execute(url, options)
  }

  static post(url, options) {
    options = options || {}
    options.method = 'post'
    return execute(url, options)
  }

  static put(url, options) {
    options = options || {}
    options.method = 'put'
    return execute(url, options)
  }

  static delete(url, options) {
    options = options || {}
    options.method = 'delete'
    return execute(url, options)
  }
}

module.exports = {
  'http': http
}
