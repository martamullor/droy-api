const projectsService = require('../services/projects')
var { ApiError } = require('../lib/errors')

async function getProject (req, res, next) {
  try {
    const { currentUser } = req.session
    const { projectId } = req.params
    if (!currentUser.userProjects.includes(projectId)) throw new ApiError(401, 'Unauthorized')
    const projects = await projectsService.getOne(projectId)
    res.status(201).json(projects)
  } catch (error) {
    next(error)
  }
}

async function createProject (req, res, next) {
  try {
    const { currentUser } = req.session
    const { body: { name, style, componentsConfiguration } } = req
    const newProject = await projectsService.createProject(currentUser, name, style, componentsConfiguration)
    res.status(201).json(newProject)
  } catch (error) {
    next(error)
  }
}

async function updateProject (req, res, next) {
  try {
    const { currentUser } = req.session
    const { projectId } = req.params
    console.log(projectId, currentUser)
    if (!currentUser.userProjects.includes(projectId)) throw new ApiError(401, 'Unauthorized')
    const { body: { componentsConfiguration } } = req
    const updatedProject = await projectsService.updateProject(projectId, componentsConfiguration)
    res.status(201).json(updatedProject)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProject,
  createProject,
  updateProject
}
