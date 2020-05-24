var express = require('express')
var router = express.Router()
const projectsController = require('../controllers/projects')

router.route('/:projectId')
  .get(projectsController.getProject)
  .delete(projectsController.deleteProject)

router.route('/:projectId/deploy')
  .get(projectsController.deployProject)

router.route('/user/:userId')
  .get(projectsController.getAll)
  .post(projectsController.createProject)

router.route('/:projectId')
  .put(projectsController.updateProject)

module.exports = router
