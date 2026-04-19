const express = require('express')
const { serviceGet, servicePost } = require('../services/service.services')
const router = express.Router()

router.get('/', serviceGet)
router.post('/', servicePost)

module.exports = router
