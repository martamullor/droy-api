const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const { Schema } = mongoose
const { String, ObjectId } = Schema.Types

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: [validator.isEmail, 'Incorrect email field']
  },
  hashedPassword: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
},
{
  timestamps: true
})

userSchema.pre('save', async function (next) {
  if (this.isModified('hashedPassword')) this.hashedPassword = await bcrypt.hash(this.hashedPassword, 10)
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User
