// // Plain NODE server setup
// const http = require('http')
// const path = require('path')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   // if (req.url === '/') {

//   //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//   //     if (err) throw err
//   //     res.writeHead(200, { 'Content-Type': 'text/html' })
//   //     res.end(content)
//   //     })
//   // }
//   // if (req.url === '/about') {

//   //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//   //     if (err) throw err
//   //     res.writeHead(200, { 'Content-Type': 'text/html' })
//   //     res.end(content)
//   //     })
//   // }
//   // if (req.url === '/api/users') {
//   //   const users =[
//   //     { name: 'Will', age: 36 },
//   //     { name: 'Brad', age: 40 }
//   //   ]

//   //   res.writeHead(200, { 'Content-Type': 'application/json' })
//   //   res.end(JSON.stringify(users))
//   //}
//   // Build file path
//   let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
//   // Extension of file
//   let extname = path.extname(filePath)
//   // Initial content type
//   let contentType = 'text/html'
//   // Check ext and check content type
//   switch (extname) {
//     case '.js':
//       contentType = 'text/javascript'
//       break
//     case '.css':
//       contentType = 'text/css'
//       break
//     case '.json':
//       contentType = 'application/json'
//       break
//     case '.png':
//       contentType = 'image/png'
//       break
//     case '.jpg':
//       contentType = 'image/jpg'
//       break
//   }

//   // Read file
//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         // Page not found
//         fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
//           res.writeHead(200, { 'Content-Type': 'text/html' })
//           res.end(content, 'utf-8')
//         })
//       } else {
//         // Some server error
//         res.writeHead(500)
//         res.end(`Server error: ${err.code}`)
//       }
//     } else {
//       // Success
//       res.writeHead(200, { 'Content-Type': contentType })
//       res.end(content, 'utf-8')
//     }
//   })
// })

// const PORT = process.env.PORT || 5000

// server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))


//EXPRESS server setup
const express = require('express')
const path = require('path')
const app = express()

// Set global app route
global.APP_ROOT = path.resolve(__dirname)

// Get env
const { NODE_ENV } = process.env

// Set env
const dotEnvPath = NODE_ENV === 'production' ? '.env' : NODE_ENV && `.env.${NODE_ENV}`
require('dotenv').config({
  path: dotEnvPath
})

// Pass express app object into app function
require('./app/index')(app)

// Demo
// require('./demo/demo')()
// const Logger = require('./logger')
// const logger = new Logger()

// logger.on('message', (data) => {
//   console.log('Called Listener: ', data)
// })

// logger.log('Hello world')