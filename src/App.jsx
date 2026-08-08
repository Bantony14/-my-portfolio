import Navbar from "./components/Helper/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import OutletWithNavAndFooter from "./components/Helper/OutletWithNavAndFooter";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route element={<OutletWithNavAndFooter />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
