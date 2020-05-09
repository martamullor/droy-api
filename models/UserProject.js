const mongoose = require('mongoose')
const { Schema } = mongoose
const { String } = Schema.Types

const userProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  style: {
    type: String,
    required: true,
    trim: true
  },
  componentsConfiguration: {
    type: [new Schema({
      parentComponentCode: {
        type: String,
        required: true,
        trim: true
      },
      componentInfo: {
        type: Object,
        required: true
      }
    })]
  }

},
{
  timestamps: true
})

const UserProject = mongoose.model('UserProject', userProjectSchema)
module.exports = UserProject
