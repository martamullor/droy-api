var { ApiError } = require('../lib/errors')

function isLoggedIn (req, res, next) {
  try {
    if (!req.session.currentUser) throw new ApiError(401, 'Unauthorized')
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  isLoggedIn
}
