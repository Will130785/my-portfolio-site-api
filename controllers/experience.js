module.exports.getAllExperience = async (req, res) => {
  const data = {
    title: 'Work Experience page',
    description: 'Work experience will go here'
  }

  console.log(data)
  res.send(data)
}
