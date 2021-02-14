class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Exception")
  }
}

class ICrud {

  create(job) {
    throw new NotImplementedException()
  }

  read(job) {
    throw new NotImplementedException()
  }

  update(idJob, job) {
    throw new NotImplementedException()
  }

  delete(idJob) {
    throw new NotImplementedException()
  }
}

class MongoDB extends ICrud {
  constructor() {
    super()
  }

  create(job) {
    console.log('Job was saved in MongoDB')
  }
}

class Postgres extends ICrud {
  constructor() {
    super()
  }

  create(job) {
    console.log('Job was saved in Postgres')
  }
}

class ContextStrategy {
  constructor(strategy) {
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
}

const contextMongoDB = new ContextStrategy(new MongoDB())
contextMongoDB.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()

contextPostgres.read()
/*
