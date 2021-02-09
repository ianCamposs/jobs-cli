const assert = require('assert')
const database = require('./database')

const exampleJob = {
  title: 'Back End with Node.js working in Amazon',
  locale: 'remote',
  payment: '100000',
  technologies: 'Node, Javascript, aws'
}

describe('Units Tests for CRUD of jobs using files', function() {

  it('Test Case 1: Register a job using files', async() => {
    let expected = true
    let result = await database.registerJob(exampleJob)

    assert.strictEqual(result, expected)
  })
})