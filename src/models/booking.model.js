const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
  {
    userEmail: String,
    serviceId: String,
    serviceName: String,
    bookingDate: Date,
    location: String,
    status: {
      type: String,
      enum: ['assigned', 'planning', 'materials_prepared', 'on_the_way', 'setup', 'completed'],
      default: 'assigned',
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

const bookingModel = mongoose.model('booking', bookingSchema)

module.exports = bookingModel
