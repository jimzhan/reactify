import assert from 'assert'
import http from '../../src/web/http'


describe('http', () => {
  describe('#get()', () => {
    it('should return repository info in JSON', () => {
      http.get('https://api.github.com/repos/goanywhere/rex')
        .then((response) => {
          if (response.ok) {
            var repos = JSON.parse(response.body)
            assert.equal(repos.name, 'rex')
          }
        })
    })

    it('should return "Not Found" error response in JSON', () => {
      http.get('https://api.github.com/repos/goanywhere/404')
        .then((response) => {
          assert(response.notFound, 404)
          var message = JSON.parse(response.body)
          assert.equal(message.name, 'Not Found')
        })
    })
  })
})
