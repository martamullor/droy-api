const UserProject = require('../models/UserProject')
const User = require('../models/User')
const ApiError = require('../lib/errors')

async function getOne (projectId, currentUser) {
  const user = await User.findById(currentUser._id)
  if (!user.userProjects.includes(projectId)) throw new ApiError(401, 'Its not your project')
  const project = await UserProject.findById(projectId)
  return project
}

async function createProject (currentUser, name, style) {
  const project = await UserProject.create({ name, style })
  const user = await User.findById(currentUser._id)
  user.userProjects.push(project._id)
  await user.save()
  return project
}

async function updateProject (projectId, componentsConfiguration, currentUser) {
  const user = await User.findById(currentUser._id)
  if (!user.userProjects.includes(projectId)) throw new ApiError(401, 'Its not your project')
  const updatedProject = await UserProject.findByIdAndUpdate(projectId, { componentsConfiguration }, { new: true })
  return updatedProject
}

module.exports = {
  getOne,
  createProject,
  updateProject
}
