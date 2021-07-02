// this file goes to make a request in server through of server.js

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)