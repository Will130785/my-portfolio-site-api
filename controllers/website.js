const Blog = require(`${global.APP_ROOT}/models/Blog`)
const Current = require(`${global.APP_ROOT}/models/Current`)
const Freelance = require(`${global.APP_ROOT}/models/Freelance`)
const Project = require(`${global.APP_ROOT}/models/Project`)

// Get blogs for website
module.exports.getBlogsWebsite = async (req, res) => {
  try {
    Blog.find({}, (err, blogs) => {
      if (!err) {
        console.log('Retrieved all blogs for website')
        res.send(blogs)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Get current work for website
module.exports.getCurrentWebsite = async (req, res) => {
  try {
    Current.find({}, (err, current) => {
      if (!err) {
        console.log('retrieved all current for website')
        res.send(current)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Get freelance work for website
module.exports.getFreelanceWebsite = async (req, res) => {
  try {
    Freelance.find({}, (err, freelance) => {
      if (!err) {
        console.log('retrieved all freelance for website')
        res.send(freelance)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Get projects for website
module.exports.getProjectsWebsite = async (req, res) => {
  try {
    Project.find({}, (err, projects) => {
      if (!err) {
        console.log('retrieved all projects for website')
        res.send(projects)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
