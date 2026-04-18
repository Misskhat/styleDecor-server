const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema(
  {
    userEmail: String,
    serviceId: String,
    amount: Number,
    transactionId: String,
    paymentDate: Date,
  },
  { timestamps: true },
)

const paymentModel = mongoose.model('payment', paymentSchema)

module.exports = paymentModel
