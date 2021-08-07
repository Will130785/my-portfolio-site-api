const Current = require(`${global.APP_ROOT}/models/Current`)

// Get all current
module.exports.getAllCurrent = async (req, res) => {
  try {
    Current.find({}, (err, allCurrent) => {
      if (!err) {
        console.log('Retrieved all current')
        res.send(allCurrent)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Create new Current
module.exports.createCurrent = async (req, res) => {
  // Get data from req
  const data = await req.body
  try {
    Current.create(data, (err, newCurrent) => {
      if (!err) {
        console.log('Created new current')
        res.send(newCurrent)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Delete Current
module.exports.deleteCurrent = async (req, res) => {
  // Get id from params
  const id = req.params.id
  try {
    Current.findByIdAndDelete(id, (err, deletedCurrent) => {
      if (!err) {
        console.log('Current work deleted')
        res.send(deletedCurrent)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
