const express = require('express')
const {
  createBooking,
  getsAllBooking,
  myBooking,
  updateBooking,
  cancelBooking,
} = require('../services/booking.services')
const { verifyToken } = require('../middleware/verifyToken')
const { verifyAdmin } = require('../middleware/verifyAdmin')
const router = express.Router()

router.post('/booking-created', verifyToken, createBooking)
router.get('/booking-data', verifyToken, verifyAdmin, getsAllBooking)
router.get('/my-booking-data', verifyToken, myBooking)
router.patch('/my-booking-data/:id', verifyToken, updateBooking)
router.delete('/my-booking-data/:id', verifyToken, cancelBooking)

module.exports = router
