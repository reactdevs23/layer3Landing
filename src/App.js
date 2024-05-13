import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import Header from "./components/Header/Header";
import StartBuilding from "./pages/StartBuilding/StartBuilding";
import EcoSystem from "./pages/EcoSystem/EcoSystem";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();

  // Define a boolean to check if the current path is '/ecosystem'
  const isTransparent = location.pathname === "/ecosystem";
  return (
    <div className={clsx("mainPage")}>
      <Header isTransparent={isTransparent} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecosystem" element={<EcoSystem />} />
        <Route path="/start-building" element={<StartBuilding />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
