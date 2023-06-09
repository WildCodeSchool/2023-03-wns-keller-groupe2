import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import "./App.scss";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
