import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Login/Home/Home";
import Login from "./Pages/Login/Login";
import ElectricBike from "./Pages/ElectricBike/ElectricBike";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/electricBike" element={<ElectricBike />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
