const express = require('express')
const app = express()
const cors = require('cors')
const serviceRouter = require('./routes/service.routes')
const userRouter = require('./routes/user.routes')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cors())

app.use('/api/services', serviceRouter)
app.use('/api/users', userRouter)

module.exports = app
