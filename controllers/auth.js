const authService = require('../services/auth')
var { ApiError } = require('../lib/errors')

function whoAmI (req, res) {
  if (!req.session.currentUser) throw new ApiError(401, 'Not logged')
  res.status(200).json(req.session.currentUser)
}

async function login (req, res, next) {
  try {
    const { body: { email, hashedPassword } } = req
    const user = await authService.login(email, hashedPassword)
    req.session.currentUser = user
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

async function signUp (req, res, next) {
  try {
    const { body: { email, hashedPassword, name } } = req
    if (!email || !hashedPassword) throw new ApiError(400, 'Username and Password required')
    const newUser = await authService.createUser(email, hashedPassword, name)
    req.session.currentUser = newUser
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}

function logout (req, res, next) {
  req.session.destroy(err => {
    if (err) next(err)
    return res.status(204).send()
  })
}

module.exports = {
  whoAmI,
  signUp,
  login,
  logout
}
