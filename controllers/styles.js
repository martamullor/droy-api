const stylesService = require('../services/styles')

async function getAll (req, res, next) {
  try {
    const styles = await stylesService.getAll()
    res.status(201).json(styles)
  } catch (error) {
    next(error)
  }
}

async function createOne (req, res, next) {
  try {
    const { body: { code, className, name, description, image } } = req
    const newStyle = await stylesService.createStyle(code, className, name, description, image)
    res.status(201).json(newStyle)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  createOne
}
