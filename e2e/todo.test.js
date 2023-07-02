import assert from 'node:assert/strict'
import { describe, it, before, after } from 'node:test'
import { once } from 'node:events'

const PORT = 3000

describe('[POST] /todo', () => {
  let server
  before(async () => {
    server = (await import('../nodejs-vanilla/src/main.js')).server
    await once(server, 'listening')
  })
  after((done) => {
    server.close(done)
  })

  it('should create a to-do item correctly', async () => {
    const response = await fetch(`http://localhost:${PORT}/todo`, {
      method: 'POST'
    })
    assert.equal(response.status, 201)
  })
  it.todo('should return a validation error for an invalid a to-do item')
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
