const setupApp = require('./app-setup')
const startApp = require('./app-start')

// Export app function
module.exports = async (app) => {
  // Configure app
  await setupApp(app)
  // Start app
  await startApp(app)
}
