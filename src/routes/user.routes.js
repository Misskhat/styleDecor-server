const express = require('express')
const jwt = require('jsonwebtoken')
const { userLogin, updateUserRole, allUsers } = require('../services/user.services')
const { verifyToken } = require('../middleware/verifyToken')
const { verifyAdmin } = require('../middleware/verifyAdmin')
const router = express.Router()

router.post('/login', userLogin)
router.get('/all-user', verifyToken, verifyAdmin, allUsers)
router.patch('/update-user/:id', verifyToken, verifyAdmin, updateUserRole)

module.exports = router
