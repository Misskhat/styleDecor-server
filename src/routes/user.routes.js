const express = require('express')
const jwt = require('jsonwebtoken')
const { userLogin } = require('../services/user.services')
const router = express.Router()

router.post('/login', userLogin)

module.exports = router
