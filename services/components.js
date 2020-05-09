const Component = require('../models/Component')

async function getAll () {
  return await Component.find()
}

async function createComponent (code, defaultConfig, belongsToStyle, image) {
  return await Component.create({ code, defaultConfig, belongsToStyle, image })
}

module.exports = {
  getAll,
  createComponent
}
