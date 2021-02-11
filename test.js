const assert = require('assert')
const database = require('./database')

const exampleJob = {
  idJob: 1612905452338,
  title: 'Back End with Node.js working in Amazon',
  locale: 'remote',
  payment: '100000',
  technologies: 'linux, node, java, javascript, AWS, python, docker'
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

  it('Test case 3: Show Jobs by technology', async() => {
    let expected = {"idJob":1612905452338,
                    "title":"Back End with Node.js working in Amazon",
                    "locale":"remote",
                    "payment":"100000",
                    "technologies":"Node, java, javascript, AWS"}
    let [result] = await database.showJobByTechnologie('node')
    
    assert.deepStrictEqual(result, expected)
  })

  it.only('Test case 4: Remove a job selected by your ID', async() => {
    let expected = {"idJob":1613013517054,
                    "title":"Back End with Node.js working in Amazon",
                    "locale":"remote",
                    "payment":"100000",
                    "technologies":"linux, node, java, javascript, AWS, python, docker"}
    let remover = await database.deleteJobById(exampleJob.idJob)
    let [result] = await database.showAllJobs()
    assert.deepStrictEqual(result, expected)
  })
})