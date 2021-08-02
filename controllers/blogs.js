module.exports.getBlogs = async (req, res) => {
  const data = {
    title: 'Blog page',
    description: 'Current blogs will be displayed here'
  }
  console.log(data)
  res.send(data)
}
