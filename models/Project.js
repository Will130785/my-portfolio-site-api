const mongoose = require('mongoose')

const newProjectSchema = new mongoose.Schema({
  projectTitle: String,
  shortDesc: String,
  desc: String,
  image: String,
  features: Array,
  github: String,
  project: String
})

module.exports = mongoose.model('Project', newProjectSchema)
