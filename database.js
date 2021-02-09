const {readFileSync, writeFileSync} = require('fs')

class Database {

  constructor() {
    this.FILE_NAME = 'jobs.json'
  }

  async receiveDataFile() {
    const file = await readFileSync(this.FILE_NAME, 'utf8')
    return JSON.parse(file.toString())
  }

  async writeDataInFile(data) {
    await writeFileSync(this.FILE_NAME, JSON.stringify(data))
    return true;
  }

  async registerJob(job) {
    const data = await this.receiveDataFile()
    const idJob = Date.now();

    //adding a id to object Job
    const jobWithId = {
      idJob,
      ...job
    }

    //adding the object job into the string of jobs 
    const jobResult = [
      ...data,
      jobWithId
    ]

    const result = await this.writeDataInFile(jobResult)
    return result
  }

}

module.exports = new Database()