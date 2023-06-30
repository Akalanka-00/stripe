import { BrowserRouter, Route, Routes } from "react-router-dom";
import Refund from "./components/Refund";

import "./styles/payment.css"
import Homepage from "./page/Homepage";
import PaymentSuccess from "./components/CardPayment/PaymentSuccess";
import Payment from "./components/CardPayment/Payment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="payment/" element={<Payment />} />
            <Route path="refund/" element={<Refund />} />
            <Route path="successpay/" element={<PaymentSuccess />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
