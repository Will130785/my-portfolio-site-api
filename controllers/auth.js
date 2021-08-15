const User = require(`${global.APP_ROOT}/models/User`)
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const key = require(`${global.APP_ROOT}/app/keys`).secret

// Register User
module.exports.registerUser = async (req, res) => {
  // Get data from body
  const data = req.body
  try {
    if (data.password !== data.passwordConfirm) {
      return res.status(400).json({
        msg: 'Passwords do not match'
      })
    } else {
      User.findOne({ username: data.username })
        .then(user => {
          if (user) {
            return res.status(400).json({
              msg: 'Username already exists'
            })
          }

          // Data is valid and we can add the user
          const newUser = new User(data)
          // Hash password
          bcrypt.genSalt(10, (err, salt) => {
            if (!err) {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (!err) {
                  newUser.password = hash
                  newUser.save()
                    .then(user => {
                      return res.status(201).json({
                        success: true,
                        msg: 'User is now registered'
                      })
                    })
                } else {
                  console.log(err)
                }
              })
            } else {
              console.log(err)
            }
          })
        })
    }
  } catch (err) {
    console.log(err)
  }
}

// Login user
module.exports.loginUser = async (req, res) => {
  // Get data from body
  const data = await req.body
  try {
    User.findOne({ username: data.username })
      .then(user => {
        if (!user) {
          return res.status(404).json({
            success: false,
            msg: 'Username not found'
          })
        }

        // If there is a user we will compare the password
        bcrypt.compare(data.password, user.password)
          .then(isMatch => {
            if (isMatch) {
              // Users password is correct and we send the web token
              const payload = {
                _id: user._id,
                username: user.username
              }
              jwt.sign(payload, key, {
                expiresIn: 604800
              }, (err, token) => {
                if (!err) {
                    console.log('You are logged in')
                  res.status(200).json({
                    success: true,
                    user: user,
                    token: `Bearer ${token}`,
                    msg: "You are now logged in"
                  })
                } else {
                  console.log(err)
                }
              })
            } else {
              return res.status(404).json({
                success: false,
                msg: 'Incorrect password'
              })
            }
          })
      })
  } catch (err) {
    console.log(err)
  }
}