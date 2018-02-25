const http = require('http')
const fs = require('fs')

// console.log(__dirname)
const indexhtml = fs.readFileSync(`${__dirname}/index.html`)
// console.log(indexhtml)
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write(indexhtml)
  res.end()
});

server.listen(port, hostname, () => {              console.log(`Server running at http://${hostname}:${port}/`)
})
