class Job {
  constructor({
    idJob,
    title,
    locale,
    payment,
    technologies
  })
  {
    this.idJob = idJob,
    this.title = title,
    this.locale = locale,
    this.payment = payment,
    this.technologies = technologies
  }
}

module.exports = Job