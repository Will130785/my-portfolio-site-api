const Blog = require(`${global.APP_ROOT}/models/Blog`)

// Get all blogs
module.exports.getBlogs = async (req, res) => {
  try {
    Blog.find({}, (err, blogs) => {
      if (!err) {
        console.log('All blogs retrieved')
        res.send(blogs)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Create new blog
module.exports.createBlog = async (req, res) => {
  // get data from req
  const data =  await req.body
  try {
    // Create new blog entry
    Blog.create(data, (err, newBlog) => {
      if (!err) {
        console.log('New blog created')
        res.send(newBlog)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Delete Blog
module.exports.deleteBlog = async (req, res) => {
  // get id from params
  const id = await req.params.id
  try {
    Blog.findByIdAndDelete(id, (err, deletedBlog) => {
      if (!err) {
        console.log('Blog successfully deleted')
        res.send(deletedBlog)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
