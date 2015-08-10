'use strict'
import assert from 'assert'
import http from '../../src/http'

const root = 'http://jsonplaceholder.typicode.com'


describe('http.get()', () => {
  it(`GET ${root}/posts/1`, () => {
    http.get(root)
      .then((response) => {
        if (response.ok) {
          var post = JSON.parse(response.body)
          assert.equal(post.id, 1)
        }
      })
  })

  it(`GET ${root}/404`, () => {
    http.get(`{root}/404`)
      .then((response) => {
        assert(response.notFound, 404)
        assert(JSON.parse(response.body), {})
      })
  })
})


describe('http.post()', () => {
  it(`POST ${root}/posts`, () => {
    http.post(`${root}/posts`)
      .then((response) => {
      assert(response.status, 201)
    })
  })
})


describe('http.put()', () => {
  it(`PUT ${root}/posts/1`, () => {
    http.put(`${root}/posts/1`)
      .then((response) => {
      assert(response.status, 200)
    })
  })
})


describe('http.delete()', () => {
  it(`DELETE ${root}/posts/1`, () => {
    http.put(`${root}/posts/1`)
      .then((response) => {
      assert(response.status, 204)
    })
  })
})
