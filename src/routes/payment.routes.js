const express = require('express')
const { makePayment, allPayments, userAllPayments } = require('../services/payment.services')
const { verifyToken } = require('../middleware/verifyToken')
const { verifyAdmin } = require('../middleware/verifyAdmin')
const router = express.Router()

router.post('/make-payment', verifyToken, makePayment)
router.get('/all-payments', verifyToken, verifyAdmin, allPayments)
router.get('/my-payments', verifyToken, userAllPayments)

module.exports = router
