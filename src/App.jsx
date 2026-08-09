import Navbar from "./components/Helper/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import OutletWithNavAndFooter from "./components/Helper/OutletWithNavAndFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route element={<OutletWithNavAndFooter />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
