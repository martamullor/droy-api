const projectsService = require('../services/projects')

async function getAll (req, res, next) {
  try {
    const { userId } = req.params
    const allProjects = await projectsService.getAll(userId)
    res.status(201).json(allProjects)
  } catch (error) {
    next(error)
  }
}

async function deleteProject (req, res, next) {
  try {
    const { projectId } = req.params
    const projects = await projectsService.deleteOne(projectId)
    res.status(201).json(projects)
  } catch (error) {
    next(error)
  }
}

async function getProject (req, res, next) {
  try {
    const { projectId } = req.params
    const projects = await projectsService.getOne(projectId)
    res.status(201).json(projects)
  } catch (error) {
    next(error)
  }
}

async function deployProject (req, res, next) {
  try {
    const { projectId } = req.params
    const projects = await projectsService.deploy(projectId)
    res.status(201).json(projects)
  } catch (error) {
    next(error)
  }
}

async function createProject (req, res, next) {
  try {
    const { userId } = req.params
    const { body: { name, style } } = req
    const newProject = await projectsService.createProject(userId, name, style)
    res.status(201).json(newProject)
  } catch (error) {
    next(error)
  }
}

async function updateProject (req, res, next) {
  try {
    const { projectId } = req.params
    const { body: { componentsConfiguration } } = req
    const updatedProject = await projectsService.updateProject(projectId, componentsConfiguration)
    res.status(201).json(updatedProject)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  deployProject
}
