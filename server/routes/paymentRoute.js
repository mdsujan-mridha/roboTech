const express = require("express");

const { processPayment, sendStripeApiKey } = require("../controller/paymentControll");
const { isAuthenticatedUser } = require("../middleware/auth");


const router = express.Router();
router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").get(sendStripeApiKey);


module.exports = router;