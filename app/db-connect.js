const mongoose = require('mongoose')

// Connect to database
const dbConnect = (connect) => {
  mongoose.connect(connect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  // Check database connection
  const db = mongoose.connection
  db.on('error', () => {
    console.log('Error connection to Mongodb')
  })
  db.once('open', () => {
    console.log('Connected to database')
  })
}

module.exports = dbConnect
