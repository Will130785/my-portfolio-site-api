const mongoose = require('mongoose')

const newCurrentSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('Current', newCurrentSchema)
