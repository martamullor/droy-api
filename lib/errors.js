class ValidationError extends Error {
  constructor (error, message) {
    super()
    this.message = 'Validation error'
    this.statusCode = 400
    this.isControlledError = true
    this.errors = Object.keys(error.errors).map(k => error.errors[k].message)
  }
}

class ApiError extends Error {
  constructor (statusCode, message) {
    super()
    this.message = 'ApiError'
    this.statusCode = statusCode
    this.isControlledError = true
    this.errors = [message]
  }
}

class MongoError extends Error {
  constructor (error, message) {
    super(message)
    this.message = 'MongoError'
    this.statusCode = 400
    this.isControlledError = true
    this.errors = [error.errmsg]
  }
}

module.exports = {
  ApiError,
  ValidationError,
  MongoError
}
