const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);



 async function stripe_api_card_payment(req, res) {
  const { price, date } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "usd",
   // payment_method_types: ['card'],
    automatic_payment_methods: {
      enabled: true,
    },
  });

  console.log(paymentIntent);


  res.send({
    clientSecret: paymentIntent.client_secret,
    paymentId: paymentIntent.id,
  });
};

module.exports ={stripe_api_card_payment}