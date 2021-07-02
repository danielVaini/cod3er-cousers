const port = 3003;

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true })) // all request pass for here
server.use(bodyParser.json())
server.use(allowCors)
server.listen(port, () => {
  console.log('BACKEND IS RUUNING ON PORT', port)
})

module.exports = server