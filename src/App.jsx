import Navbar from "./components/Helper/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import OutletWithNavAndFooter from "./components/Helper/OutletWithNavAndFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import RentFlowCard from "./components/Project/RentFlow/RentFlowCard.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<OutletWithNavAndFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<RentFlowCard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
