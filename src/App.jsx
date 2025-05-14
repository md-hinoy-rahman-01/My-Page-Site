import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Academics from "./Academics";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;