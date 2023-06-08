import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import SideFilter from "./Components/SideFilter/SideFilter";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<SideFilter/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
