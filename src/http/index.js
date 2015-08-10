'use strict'
import request from 'superagent'

/**
 * Fire the actual http request & return a Promise object.
 *
 * @param {String} method
 * @return {Promise}
 * @api private
 */
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

/**
 * Fire an http GET request to the URL endpoint with options.
 *
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 * @api public
 */
exports.get = (url, options) => {
  return execute('get', url, options)
}


/**
 * Fire an http POST request to the URL endpoint with options.
 *
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 * @api public
 */
exports.post = (url, options) => {
  return execute('post', url, options)
}


/**
 * Fire an http PUT request to the URL endpoint with options.
 *
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 * @api public
 */
exports.put = (url, options) => {
  return execute('put', url, options)
}

/**
 * Fire an http DELETE request to the URL endpoint with options.
 *
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
 * @api public
 */
exports.delete = (url, options) => {
  return execute('delete', url, options)
}
