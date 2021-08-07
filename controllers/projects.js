const Project = require(`${global.APP_ROOT}/models/Project`)

// Get all projects
module.exports.getAllProjects = async (req, res) => {
  try {
    Project.find({}, (err, project) => {
      if (!err) {
        console.log('Retrieved all project')
        res.send(project)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// create new project
module.exports.createProject = async (req, res) => {
  // Get data from req
  const data = await req.body
  try {
    Project.create(data, (err, newProject) => {
      console.log('Created new project')
      res.send(newProject)
    })
  } catch (err) {
    console.log(err)
  }
}

// Delete project
module.exports.deleteProject = async (req, res) => {
  // get id from params
  const id = await req.params.id
  try {
    Project.findByIdAndDelete(id, (err, deletedProject) => {
      if (!err) {
        console.log('Deleted project')
        res.send(deletedProject)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
