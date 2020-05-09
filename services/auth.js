const User = require('../models/User')
var { ApiError } = require('../lib/errors')
const bcrypt = require('bcrypt')

async function login (email, hashedPassword) {
  const user = await User.findOne({ email })
  if (!user) throw new ApiError(404, 'Not found')
  if (!bcrypt.compareSync(hashedPassword, user.hashedPassword)) throw new ApiError(404, 'Incorrect Password')
  return user
}

async function createUser (email, hashedPassword, name) {
  const alreadyExists = await User.findOne({ email })
  if (alreadyExists) throw new ApiError(422, 'This user already exists')
  return await User.create({ email, hashedPassword, name })
}

module.exports = {
  createUser,
  login
}
