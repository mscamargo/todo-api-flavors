import assert from 'node:assert'
import { describe, it, before, after } from 'node:test'

import { once } from 'node:events'

const URL = 'http://localhost:3000/todo'

async function setup () {
  const server = (await import('../nodejs-vanilla/src/main.js')).server
  await once(server, 'listening')
  return server
}

/**
 * @param {import 'http'.Server} server
 */
async function teardown (server) {
  await new Promise(resolve => server.close(resolve))
}

describe('[POST] /todo', () => {
  /**
   * @type {import 'http'.Server}
   */
  let server

  before(async () => {
    server = await setup()
  })

  after(async () => await teardown(server))

  describe('when no authorization is provided', () => {
    /**
     * @type {Response}
     */
    let response
    before(async () => {
      response = await fetch(URL, {
        method: 'POST'
      })
    })
    it('should return the status code 401', () => {
      assert.equal(response.status, 401)
      assert.equal(response.statusText, 'Unauthorized')
    })
    it('should return an empty body', async () => {
      assert.equal(response.headers.get('Content-Type'), null)
      assert.equal(response.headers.get('Content-Length'), null)
      assert.equal(await response.text(), '')
    })
  })
})

describe('[GET] /todo', () => {
  it.todo('should return a to-do items lits')
})

describe('[GET] /todo/:id', () => {
  it.todo('should return a detailed to-do')
})

describe('[PUT] /todo/:id', () => {
  it.todo('should return a validation error for an invalid data')
  it.todo('should successfully update a to-do')
})

describe('[POST] /todo/:id/complete', () => {
  it.todo('should mark a to-do as complete')
})

describe('[DELETE] /todo/:id', () => {
  it.todo('should delete a to-do')
})
