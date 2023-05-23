import CreditCardForm from "./components/CreditCardForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Otp from "./Otp";
import Admin from "./components/Admin";



function App() {
  return (
    <div
    // for the background color
      className="App"
      style={{
        backgroundColor: "aliceblue",
        width: "100%",
        height: "100%",
      }}
    >
      <Router>
        <Routes>
          {/* for routing between the subdomains */}
          <Route path="/" element={<Checkout />} />
          <Route path="/checkout" element={<CreditCardForm />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/otp" element={<Otp />} /> */}
          
          {/* <Route path="/data" element={<Data />} /> */}
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
