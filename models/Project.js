const mongoose = require('mongoose')

const newProjectSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('Project', newProjectSchema)
