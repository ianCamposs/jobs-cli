const ICrud = require('../interfaces/interfaceCrud')


class ContextStrategy extends ICrud{
  constructor(strategy) {
    super()
    this._database = strategy
  }

  create(job) {
    return this._database.create(job)
  }

  read(job) {
    return this._database.read(job)
  }

  update(idJob, job) {
    return this._database.update(idJob, job)
  }

  delete(idJob) {
    return this._database.delete(idJob)
  }

  isConnected() {
    return this._database.isConnected()
  }
}

module.exports = ContextStrategy