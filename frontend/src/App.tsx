import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ElectricBike from "./Pages/ElectricBike/ElectricBike";
import VTT from "./Pages/VTT/VTT";
import VeloPro from "./Pages/VeloPro/VeloPro";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/veloElec" element={<ElectricBike />} />
        <Route path="/vtt" element={<VTT />} />
        <Route path="/veloPro" element={<VeloPro />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
