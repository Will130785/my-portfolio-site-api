module.exports.getAllFreelance = async (req, res) => {
  const data = {
    title: 'Freelance work page',
    description: 'Freelance work will go here'
  }

  console.log(data)
  res.send(data)
}
