const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {
  constructor() {
    super()
  }

  create(job) {
    console.log('Job was saved in MongoDB')
  }
}

module.exports = MongoDB