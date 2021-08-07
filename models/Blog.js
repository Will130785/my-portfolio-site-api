const mongoose = require('mongoose')

const newBlogSchema = new mongoose.Schema({
  title: String
})

module.exports = mongoose.model('Blog', newBlogSchema)
