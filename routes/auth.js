var express = require('express')
var router = express.Router()
const authController = require('../controllers/auth')

router.route('/whoami')
  .get(authController.whoAmI)

router.route('/signup')
  .post(authController.signUp)

router.route('/login')
  .post(authController.login)

router.route('/logout')
  .get(authController.logout)

module.exports = router
