const assert = require('assert')
const database = require('./database')

const exampleJob = {
  idJob: 1612905452338,
  title: 'Back End with Node.js working in Amazon',
  locale: 'remote',
  payment: '100000',
  technologies: 'Node, Javascript, aws'
}

describe('Units Tests for CRUD of jobs using files', function() {

  it('Test case 1: Register a job using files', async() => {
    let expected = true
    let result = await database.registerJob(exampleJob)

    assert.strictEqual(result, expected)
  })

  it('Test case 2: Show all jobs registered', async() => {
    let expected = await database.receiveDataFile()
    let result = await database.showAllJobs()
    assert.deepStrictEqual(result, expected)
  })

  it('Teste case 3: Show a job by technology', async() => {

  })
})