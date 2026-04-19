const express = require('express')
const app = express()
const cors = require('cors')
const serviceRouter = require('./routes/service.routes')

app.use(express.json())
app.use(cors())

app.use('/api/services', serviceRouter)

module.exports = app
