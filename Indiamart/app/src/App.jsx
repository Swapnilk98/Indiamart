import "./App.css";

import { AllRoute } from "./pages/allroute";
import { LoginPage } from "./components/loginComponents/loginpage";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./pages/ContactUs";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<AllRoute />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/cartPage" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
