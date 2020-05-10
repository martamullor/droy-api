const Component = require('../models/Component')

async function getAll (filterStyle) {
  let query = {}
  if (filterStyle) query = { belongsToStyle: filterStyle }
  return await Component.find(query)
}

async function createComponent (code, defaultConfig, belongsToStyle, image) {
  return await Component.create({ code, defaultConfig, belongsToStyle, image })
}

module.exports = {
  getAll,
  createComponent
}
