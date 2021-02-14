const ICrud = require('./interfaces/interfaceCrud')

class Postgres extends ICrud {
  constructor() {
    super()
  }

  create(job) {
    console.log('Job was saved in Postgres')
  }
}

module.exports = Postgres