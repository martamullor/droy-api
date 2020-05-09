const Style = require('../models/Style')

async function getAll () {
  return await Style.find()
}

async function createStyle (code, className, name, description, image) {
  return await Style.create({ code, className, name, description, image })
}

module.exports = {
  getAll,
  createStyle
}
