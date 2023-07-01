import { describe, it } from 'node:test'

describe('[POST] /todo', () => {
  it.todo('should create a to-do item correctly')
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
