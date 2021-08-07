const mongoose = require('mongoose')

const newExperienceSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('Experience', newExperienceSchema)
