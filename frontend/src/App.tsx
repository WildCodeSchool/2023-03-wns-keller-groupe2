import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import "./App.scss";

function App() {
  const location = useLocation();
  console.log(location);

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
