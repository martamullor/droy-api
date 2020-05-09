var express = require('express')
var router = express.Router()
const stylesController = require('../controllers/styles')

router.route('/:id')
  // .get(styleController.whoAmI)
  // .put(styleController.login)
  // .delete(styleController.logout)

router.route('/')
  .get(stylesController.getAll)
  .post(stylesController.createOne)

module.exports = router
