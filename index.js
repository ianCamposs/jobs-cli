const Commander = require('commander')
const Database = require('./database')
const Job = require('./jobs')


async function main() {

  Commander
  .version('v1')
  .option('-i, --idJob [value]', 'id of Job')
  .option('-t, --title [value]', 'title of Job')
  .option('-l, --locale [value]', 'locale of Job')
  .option('-p, --payment [value]', 'payment of Job')
  .option('-tc, --technologies [value]', 'technologies of Job')
  .option('-r, --register', 'register a Job')
  .option('-sa, --showAll', 'show all Jobs')
  .option('-ss, --showSpecific [value]', 'show Jobs by technologie')
  .option('-re, --remove', 'remove Job by ID')
  .option('-u, --update [value]', 'update Job by ID')
  .parse(process.argv)

  const options = Commander.opts()
  const job = new Job(options)

  try {
    if (options.register) {
      const result = await Database.registerJob(job)

      if(!result) {
        console.error('Job was not registered')
        return;
      }
      console.log('job registered successfully')
    }

    if (options.showAll) {
      const result = await Database.showAllJobs()
      console.log(result)
    }

    if (options.showSpecific) {
      const technologyForSearch = options.showJobByTechnologie
      const result = await Database.showJobByTechnologie(technologyForSearch)

      if(!result) {
        console.error('job was not found', error)
      }
      console.log(result)
    }
    
    if (options.remove) {
      const idJobForDelete = parseInt(options.remove)
      const result = await Database.deleteJobById(idJobForDelete)

      if(!result) {
        console.error('job was not removed', error)
      }
      console.log(result)
    }

    if (options.update) {
      const idJobForUpdadate = parseInt(options.update)

      //remove all objects in state undefined | NULL
      const data = JSON.stringify(job)
      const jobUpdate = JSON.parse(data)
      const result = await Database.updateJobById(idJobForUpdadate, jobUpdate)

      if(!result) {
        console.error('job was not updated', error)
      }
      console.log(result)
    }

  } catch (error) {
    console.error('Internal Error', error)
  }
}

main()