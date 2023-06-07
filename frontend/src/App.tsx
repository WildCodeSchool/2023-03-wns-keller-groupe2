import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import LoginForm from "./Components/loginForm/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
