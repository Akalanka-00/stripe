import React, { useState } from "react";

const Refund = () => {
  const [paymentID, setPaymentID] = useState();
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log("Input value:", { paymentID, amount });
    setPaymentID("");
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={paymentID}
          onChange={(e) => {
            setPaymentID(e.target.value);
          }}
          placeholder="Enter a paymentID"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Enter amount"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Refund;
