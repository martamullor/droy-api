var express = require('express')
var router = express.Router()
const componentsController = require('../controllers/components')

router.route('/:id')
  // .get(styleController.whoAmI)
  // .put(styleController.login)
  // .delete(styleController.logout)

router.route('/')
  .get(componentsController.getAll)
  .post(componentsController.createOne)

module.exports = router
