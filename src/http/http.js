'use strict'
import request from 'superagent'


var execute = (method, url, options) => {
  options = options || {
    headers: {
      'credentials': 'same-origin',
      'Accept-Encoding': 'application/json'
    }
  }
  return new Promise((resolve, reject) => {
    request[method.toLowerCase()](options.url)
      .set(options.headers)
      .send(options.payload)
      .end((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}

module.exports = {
  get: (url, options) => {
    return execute('get', url, options)
  },

  post: (url, options) => {
    return execute('post', url, options)
  },

  put: (url, options) => {
    return execute('put', url, options)
  },

  delete: (url, options) => {
    return execute('delete', url, options)
  }
}
