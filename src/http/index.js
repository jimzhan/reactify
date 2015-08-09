'use strict'
import request from 'superagent'


const execute = (method, url, options) => {
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

exports.get = (url, options) => {
  return execute('get', url, options)
}

exports.post = (url, options) => {
  return execute('post', url, options)
}

exports.put = (url, options) => {
  return execute('put', url, options)
}

exports.delete = (url, options) => {
  return execute('delete', url, options)
}

