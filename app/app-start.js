// Get port
const { env: { PORT } = {} } = process

// Export app start function
module.exports = async (app) => {

  // Set port
  const port = process.env.PORT

  app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
  })

  return app
}