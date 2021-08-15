const Freelance = require(`${global.APP_ROOT}/models/Freelance`)

// Get all freelance
module.exports.getAllFreelance = async (req, res) => {
  try {
    Freelance.find({}, (err, freelance) => {
      if (!err) {
        console.log('Retrieved all freelance')
        res.send(freelance)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Create new freelance
module.exports.createFreelance = async (req, res) => {
  // Get data from req
  const data = await req.body
  try {
    Freelance.create(data, (err, newFreelance) => {
      if (!err) {
        console.log('Created new freelance')
        res.send(newFreelance)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Update freelance
module.exports.updateFreelance = async (req, res) => {
  // Get id from params
  const id = await req.params.id
  // Get data from body
  const data = await req.body
  try {
    Freelance.findByIdAndUpdate(id, data, (err, updatedFreelance) => {
      if (!err) {
        console.log('Updated freelance')
        res.send(updatedFreelance)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Delete freelance
module.exports.deleteFreelance = async (req, res) => {
  // get id from params
  const id = await req.params.id
  try {
    Freelance.findByIdAndDelete(id, (err, deletedFreelance) => {
      if (!err) {
        console.log('Freelance deleted')
        res.send(deletedFreelance)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
