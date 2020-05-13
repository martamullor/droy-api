var express = require('express')
var router = express.Router()
const projectsController = require('../controllers/projects')
const { isLoggedIn } = require('../middlewares/auth')

router.route('/:projectId')
  .get(isLoggedIn, projectsController.getProject)
  .post(isLoggedIn, projectsController.deleteProject)

router.route('/')
  .get(isLoggedIn, projectsController.getAll)
  .post(isLoggedIn, projectsController.createProject)

router.route('/:projectId')
  .put(isLoggedIn, projectsController.updateProject)

module.exports = router
