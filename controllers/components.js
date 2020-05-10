const componentsService = require('../services/components')
var { ApiError } = require('../lib/errors')

async function getAll (req, res, next) {
  try {
    const { style: filterStyle } = req.query
    const components = await componentsService.getAll(filterStyle)
    res.status(201).json(components)
  } catch (error) {
    next(error)
  }
}

async function createOne (req, res, next) {
  try {
    const { body: { code, defaultConfig, belongsToStyle, image } } = req
    const component = await componentsService.createComponent(code, defaultConfig, belongsToStyle, image)
    res.status(201).json(component)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  createOne
}
