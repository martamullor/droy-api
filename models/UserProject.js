const mongoose = require('mongoose')
const { Schema } = mongoose
const { String, ObjectId } = Schema.Types

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
  user: {
    type: String,
    required: true
  },
  componentsConfiguration: {
    type: [new Schema({
      code: {
        type: String,
        required: true,
        trim: true
      },
      info: {
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
