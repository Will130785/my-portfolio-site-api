module.exports.getAllProjects = async (req, res) => {
  const data = {
    title: 'Projects page',
    description: 'Projects will go here'
  }

  console.log(data)
  res.send(data)
}
