// Require packages
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConnect = require('./db-connect')
const { DB_CONNECT } = process.env

// Initiate routes
const routes = require(`${global.APP_ROOT}/routes`)

// Export app setup function
module.exports = async (app) => {
  // set body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  // Use cors
  app.use(cors())
  // Connect to database
  dbConnect(DB_CONNECT)

  // Add custom header to responses - good for testion
  app.use((req, res, next) => {
    res.set('Test-Header', 0)
    next()
  })

  // Init routes
  app.use('/', routes)

  return app
}
