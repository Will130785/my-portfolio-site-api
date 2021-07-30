module.exports.get = async (path, req, res) => {
  if (path === '/') {
    res.end('Homepage')
  }
}