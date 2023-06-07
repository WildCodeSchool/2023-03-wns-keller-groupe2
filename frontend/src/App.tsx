import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
