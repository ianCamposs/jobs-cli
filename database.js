const {readFileSync, writeFileSync} = require('fs')

class Database {

  constructor() {
    this.FILE_NAME = 'jobs.json'
  }

  async receiveDataFile() {
    let file = await readFileSync(this.FILE_NAME, 'utf8')
    return JSON.parse(file.toString())
  }

  async writeDataInFile(data) {
    await writeFileSync(this.FILE_NAME, JSON.stringify(data))
    return true;
  }

  async registerJob(job) {
    let data = await this.receiveDataFile()
    let idJob = Date.now();

    //adding a id to object Job
    let jobWithId = {
      idJob,
      ...job
    }

    //adding the object job into the string of jobs 
    let jobResult = [
      ...data,
      jobWithId
    ]

    let result = await this.writeDataInFile(jobResult)
    return result
  }

  async showAllJobs() {
    let data = await this.receiveDataFile()
    return data
  }

}

module.exports = new Database()