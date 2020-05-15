const UserProject = require('../models/UserProject')

async function getAll (userId) {
  return await UserProject.find({ user: userId })
}

async function deleteOne (projectId) {
  return await UserProject.findByIdAndDelete(projectId)
}

async function getOne (projectId) {
  return await UserProject.findById(projectId)
}

async function createProject (userId, name, style) {
  return await UserProject.create({ name, style, user: userId })
}

async function updateProject (projectId, componentsConfiguration) {
  const userProject = await UserProject.findById(projectId)
  userProject.componentsConfiguration = componentsConfiguration
  return await userProject.save()
}

module.exports = {
  getAll,
  getOne,
  createProject,
  updateProject,
  deleteOne
}
