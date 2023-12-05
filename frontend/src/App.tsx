import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import "./App.scss";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? "" : <NavBar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
