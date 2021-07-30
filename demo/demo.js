const path = require('path')
const fs = require('fs')
const os = require('os')
const url = require('url')
const EventEmitter = require('events')

module.exports = () => {
  console.log('This is a test')
  // Path
  // Base file name
  console.log(path.basename(__filename))

  // Directory name
  console.log(path.dirname(__filename))
  console.log(__dirname)

  // File extension
  console.log(path.extname(__filename))

  // create path object
  const pathObj = {
    directory: path.dirname(__filename),
    file: path.basename(__filename),
    extension: path.extname(__filename)
  }
  console.log(path.parse(__filename))

  // Concatonate paths
  // ../test/hello.html
  console.log(path.join(__dirname, 'test', 'hello.html'))

  // FS
  // Create a folder
//   fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err
//     console.log('Folder created')
//   })
  
  // Remove file after 5 seconds
//   setTimeout(() => {
//     fs.rmdir(path.join(__dirname, '/test'), {}, (err) => {
//       if (err) throw err
//       console.log('File removed')
//     })
//   }, 5000)

  // create file and write to it
//   fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'HEllo World', (err) => {
//     if (err) throw err
//     console.log('File created and written to')

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' And hello again', (err) => {
//         if (err) throw err
//         console.log('File edited')
//       })
//   })
  // Read file
//   fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', ((err, data) => {
//     if (err) throw err
//     console.log(data)
//   }))
  // Rename file
    // fs.rename(
    //     path.join(__dirname, '/test', 'hello.txt'), 
    //     path.join(__dirname, '/test', 'helloworld.txt'),
    //     err => {
    //       if (err) throw err
    //       console.log('File name updated')
    // })

  // OS
  // Platform
  console.log(os.platform())
  // CPU arch
  console.log(os.arch())
  // CPU Core Info
  console.log(os.cpus())
  // Free memore
  console.log(os.freemem())
  // Total memory
  console.log(os.totalmem())
  // Home dir
  console.log(os.homedir())
  // Uptime
  console.log(os.uptime())

  // URLS
  const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')
  // Serialises URL
  console.log(myUrl.href)
  console.log(myUrl.toString())
  // Host (root domain)
  console.log(myUrl.host)
  // hostname
  console.log(myUrl.hostname)
  // Pathname
  console.log(myUrl.pathname)
  // Serialized query
  console.log(myUrl.search)
  // Params object
  console.log(myUrl.searchParams)
  // Add Param
  myUrl.searchParams.append('abc', '123')
  console.log(myUrl.searchParams)
  // Loop through params
  console.log(myUrl.searchParams.forEach((item) => console.log(item)))

  // Events
  // Create class
  class MyEmitter extends EventEmitter {}
  // Init object
  const myEmitter = new MyEmitter()
  // Event listener
  myEmitter.on('event', () => console.log('event fired'))
  // Init event
  myEmitter.emit('event')
  myEmitter.emit('event')
  myEmitter.emit('event')
  
}