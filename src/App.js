import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import clsx from "clsx";
import Header from "./components/Header/Header";
import StartBuilding from "./pages/StartBuilding/StartBuilding";
import EcoSystem from "./pages/EcoSystem/EcoSystem";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={clsx("mainPage")}>
      <Header />
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
