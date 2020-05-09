const UserProject = require('../models/UserProject')
const User = require('../models/User')

async function getOne (projectId) {
  const project = await UserProject.findById(projectId)
  return project
}

async function createProject (currentUser, name, style, componentsConfiguration) {
  const project = await UserProject.create({ name, style, componentsConfiguration })
  const user = await User.findById(currentUser._id)
  user.userProjects.push(project._id)
  await user.save()
  return project
}

async function updateProject (projectId, componentsConfiguration) {
  const updatedProject = await UserProject.findByIdAndUpdate(projectId, { componentsConfiguration }, { new: true })
  return updatedProject
}

module.exports = {
  getOne,
  createProject,
  updateProject
}
