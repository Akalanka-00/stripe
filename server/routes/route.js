const express = require("express");
const { stripe_api_card_payment } = require("../controller/controller");
const router = express.Router();

router.route("/save_card_payment").post(stripe_api_card_payment);


module.exports = router;