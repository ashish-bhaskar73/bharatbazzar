const express = require("express");
const { createOrder } = require("../controllers/paymentController.js");
const { payOrder } = require("../controllers/paymentController.js");
const { paymentResponse } = require("../controllers/paymentController.js");

const router = express.Router();
router.get("/get-razorpay-key", (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
});
router.post("/create-order", createOrder);
router.post("/pay-order", payOrder);
router.get("/pay-res", paymentResponse);
module.exports = router;
