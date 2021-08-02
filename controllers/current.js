module.exports.getAllCurrent = async (req, res) => {
  const data = {
    title: 'Current job',
    description: 'Current job details will go here'
  }

  console.log(data)
  res.send(data)
}
