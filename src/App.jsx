import Navbar from "./components/Helper/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import OutletWithNavAndFooter from "./components/Helper/OutletWithNavAndFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/Helper/ScrollToTop.jsx";
import RentFlowCard from "./components/Project/RentFlow/RentFlowCard.jsx";
import FashionKartCard from "./components/Project/FashionKart/FashionKartCard.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<OutletWithNavAndFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
