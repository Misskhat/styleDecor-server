const paymentModel = require('../models/payment.model')

const makePayment = async (req, res) => {
  const paymentInfo = req.body
  try {
    const payment = await paymentModel.create({ ...paymentInfo })
    res.status(200).json({
      message: 'Payment successfully added',
      payment,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong', err })
  }
}

const allPayments = async (req, res) => {
  try {
    const payments = await paymentModel.find()
    return res.status(200).json({
      message: 'Successfully fetch all payment',
      payments,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong', err })
  }
}

const userAllPayments = async (req, res) => {
  try {
    const { email } = req.userInfo
    const userAllPayments = await paymentModel.find({ userEmail: email })
    return res.status(200).json({
      message: 'Successfully fetch all payment',
      payments: userAllPayments,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong', err })
  }
}

module.exports = { makePayment, allPayments, userAllPayments }
