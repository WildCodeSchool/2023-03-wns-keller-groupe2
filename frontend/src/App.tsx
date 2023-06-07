import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <div>
        <Route path="/" element={<Home />} />
      </div>
    </Routes>
  );
}

export default App;
