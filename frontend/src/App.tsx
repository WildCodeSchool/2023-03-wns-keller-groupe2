import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ElectricBike from "./Pages/ElectricBike/ElectricBike";
import VTT from "./Pages/VTT/VTT";
import ProBike from "./Pages/ProBike/ProBike";
import VintageBike from "./Pages/VintageBike/VintageBike";
import Accessories from "./Pages/Accessories/Accessories";
import Cart from "./Pages/Cart/Cart";
import MoreInfoAboutProduct from "./Pages/MoreInfoAboutProduct/MoreInfoAboutProduct";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/veloElec" element={<ElectricBike />} />
        <Route path="/vtt" element={<VTT />} />
        <Route path="/proBike" element={<ProBike />} />
        <Route path="/vintageBike" element={<VintageBike />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/moreinfoaboutbike/:id"
          element={<MoreInfoAboutProduct />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
