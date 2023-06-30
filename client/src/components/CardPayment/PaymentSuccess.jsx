import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div>
      <center>
        <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                {new URLSearchParams(window.location.search).get("email")}
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Amount</td>
              <td>
                {new URLSearchParams(window.location.search).get("amount") /
                  100}{" "}
                USD
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Payment Intent ID</td>

              <td>
                {new URLSearchParams(window.location.search).get(
                  "payment_intent"
                )}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <br />

        <button>
          <Link to={"/"}> Back to homepage</Link>
        </button>
        <br />
        <button>
          <Link to={"/refund"}> Refund</Link>
        </button>
      </center>
    </div>
  );
};

export default PaymentSuccess;
