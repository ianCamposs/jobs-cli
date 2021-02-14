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

  isConnected(){
    throw new NotImplementedException()
  }
}

module.exports = ICrud