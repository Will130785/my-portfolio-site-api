const router = require('express').Router()

router.get('/', (req, res, next) => {
  const data = {
    name: 'Test data',
    id: 212,
  }
  console.log('This is a test route')
  res.send(data)
})

module.exports = router