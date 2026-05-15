const paymentModel = require("../models/payment.model");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const makePayment = async (req, res) => {
  const paymentInfo = req.body;
  try {
    const payment = await paymentModel.create({ ...paymentInfo });
    res.status(200).json({
      message: "Payment successfully added",
      payment,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", err });
  }
};

const allPayments = async (req, res) => {
  try {
    const payments = await paymentModel.find();
    return res.status(200).json({
      message: "Successfully fetch all payment",
      payments,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", err });
  }
};

const userAllPayments = async (req, res) => {
  try {
    const { email } = req.userInfo;
    const userAllPayments = await paymentModel.find({ userEmail: email });
    return res.status(200).json({
      message: "Successfully fetch all payment",
      payments: userAllPayments,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", err });
  }
};

const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // stripe uses cents
      currency: "usd",
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

module.exports = {
  makePayment,
  allPayments,
  userAllPayments,
  createPaymentIntent,
};
