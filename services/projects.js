const UserProject = require('../models/UserProject')
const User = require('../models/User')
const ApiError = require('../lib/errors')

async function getAll (currentUser) {
  return await UserProject.find({ user: currentUser._id }) 
}

async function deleteOne (projectId, currentUser) {
  const userProject = await UserProject.findByIdAndDelete(projectId)
  if(!userProject.user === currentUser._id) throw new ApiError(401, 'Its not your project')
  return userProject
}

async function getOne (projectId, currentUser) {
  const userProject = await UserProject.findById(projectId)
  if(!userProject.user === currentUser._id) throw new ApiError(401, 'Its not your project')
  return userProject
}

async function createProject (currentUser, name, style) {
  return await UserProject.create({ name, style, user: currentUser._id })
  
}

async function updateProject (projectId, componentsConfiguration, currentUser) {
  const userProject = await UserProject.findById(projectId)
  if(!userProject.user === currentUser._id) throw new ApiError(401, 'Its not your project')
  userProject.componentsConfiguration = componentsConfiguration
  // const updatedProject = await UserProject.findByIdAndUpdate(projectId, { componentsConfiguration }, { new: true })
  return await userProject.save()
}

module.exports = {
  getAll,
  getOne,
  createProject,
  updateProject,
  deleteOne
}
