const express = require("express");
const {
  makePayment,
  allPayments,
  userAllPayments,
  createPaymentIntent,
} = require("../services/payment.services");
const { verifyToken } = require("../middleware/verifyToken");
const { verifyAdmin } = require("../middleware/verifyAdmin");
const router = express.Router();

router.post("/make-payment", verifyToken, makePayment);
router.get("/all-payments", verifyToken, verifyAdmin, allPayments);
router.get("/my-payments", verifyToken, userAllPayments);
router.post("/create-payment-intent", verifyToken, createPaymentIntent);

module.exports = router;
