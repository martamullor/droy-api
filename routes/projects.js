var express = require('express')
var router = express.Router()
const projectsController = require('../controllers/projects')
const { isLoggedIn } = require('../middlewares/auth')

router.route('/:projectId')
  .get(isLoggedIn, projectsController.getProject)

router.route('/')
  .post(isLoggedIn, projectsController.createProject)

router.route('/:projectId')
  .put(isLoggedIn, projectsController.updateProject)

module.exports = router
