const Experience = require(`${global.APP_ROOT}/models/Experience`)

// Get all experience
module.exports.getAllExperience = async (req, res) => {
  try {
    Experience.find({}, (err, experience) => {
      if (!err) {
        console.log('Retrieved all experience')
        res.send(experience)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  } 
}

// Create new experience
module.exports.createExperience = async (req, res) => {
  // Get data from req
  const data = await req.body
  try {
    Experience.create(data, (err, newExperience) => {
      if (!err) {
        console.log('Created new experience')
        res.send(newExperience)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Update experience
module.exports.updateExperience = async (req, res) => {
  // Get id from params
  const id = await req.params.id
  // Get data from body
  const data = await req.body
  try {
    Experience.findByIdAndUpdate(id, data, (err, updatedExperience) => {
      if (!err) {
        console.log('Updated experience')
        res.send(updatedExperience)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Delete experience
module.exports.deleteExperience = async (req, res) => {
  // Get Id from params
  const id = await req.params.id
  try {
    Experience.findByIdAndDelete(id, (err, deletedExperience) => {
      if (!err) {
        console.log('Experience deleted')
        res.send(deletedExperience)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
