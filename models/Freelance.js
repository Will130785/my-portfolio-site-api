const mongoose = require('mongoose')

const newFreelanceSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('Freelance', newFreelanceSchema)
