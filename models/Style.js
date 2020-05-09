const mongoose = require('mongoose')
const { Schema } = mongoose
const { String } = Schema.Types

const styleSchema = new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  className: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  }
},
{
  timestamps: true
})

const Style = mongoose.model('Style', styleSchema)
module.exports = Style
