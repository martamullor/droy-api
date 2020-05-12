const projectsService = require('../services/projects')
var { ApiError } = require('../lib/errors')

async function getAll (req, res, next) {
  try {
    const { currentUser } = req.session
    const allProjects = await projectsService.getAll(currentUser)
    res.status(201).json(allProjects)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

async function getProject (req, res, next) {
  try {
    const { projectId } = req.params
    const { currentUser } = req.session
    const projects = await projectsService.getOne(projectId, currentUser)
    res.status(201).json(projects)
  } catch (error) {
    next(error)
  }
}

async function createProject (req, res, next) {
  try {
    const { currentUser } = req.session
    const { body: { name, style } } = req
    const newProject = await projectsService.createProject(currentUser, name, style)
    res.status(201).json(newProject)
  } catch (error) {
    next(error)
  }
}

async function updateProject (req, res, next) {
  try {
    const { projectId } = req.params
    const { currentUser } = req.session
    const { body: { componentsConfiguration } } = req
    const updatedProject = await projectsService.updateProject(projectId, componentsConfiguration, currentUser)
    res.status(201).json(updatedProject)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getProject,
  createProject,
  updateProject
}
