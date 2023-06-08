import "./App.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />

  );
}

export default App;
