const mongoose = require('mongoose')

const newUserSchema = new mongoose.Schema({
  username: String,
  password: String
})

module.exports = mongoose.model('User', newUserSchema)
