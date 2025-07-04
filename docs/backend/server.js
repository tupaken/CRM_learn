'use strict'

/*
|--------------------------------------------------------------------------
| Http Server
|--------------------------------------------------------------------------
|
| Here we boot the HTTP Server by calling the exported method. A callback
| function is optionally passed which is executed, once the HTTP server
| is running.
|
*/

const http = require('./bootstrap/http')
http(function () {
  use('Event').fire('Http.start')
})

const express = use('Express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./devtools/swagger')

const Server = use('Server')
const expressApp = Server.getInstance()

expressApp.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
