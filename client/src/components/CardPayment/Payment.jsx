import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe("pk_test_51NLMMJGpJf2apzzuw4YIF6KDaCOyKvT8etJR6LP1tg9jgQOhsSkusJo4LFs0sWSVDQZur8sOKMJelKxUTwDG4nIi00TAZXmK7h");


const Payment = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [ amount, setAmount] = useState(10099)

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:8000/save_card_payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: amount}),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        
      })
        .catch((err)=>console.log(err));
    }, []);

      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
    <div>
      <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm amount = {amount}/>
        </Elements>
      )}
    </div>
    </div>
  )
}

export default Payment
