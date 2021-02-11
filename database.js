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

  async showJobByTechnologie( tec = 'tecnologie') {
    let data = await this.receiveDataFile()
    let filter = data.filter(function(job){
      const result = job.technologies.toLowerCase().indexOf(tec) !== -1
      return result
    })

    //aplying the over function in all objetcs of document Json
    let jobsFiltereds = filter.map(function(job) {
      return job
    })
    console.log(jobsFiltereds)
    return jobsFiltereds
  }

  async deleteJobById(id) {
    if (!id) {
      throw Error('id was not informed')
    }

    let data = await this.receiveDataFile()
    let index = data.findIndex(job => job.idJob === parseInt(id))

    //Checks if the gives id was not found in json
    if(index === -1) {
    throw Error('job was not registered')
    }

    data.splice(index, 1)
    return await this.writeDataInFile(data)
  }
}

module.exports = new Database()
