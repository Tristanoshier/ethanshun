import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Music from "./pages/Music";
import Demos from "./pages/Demos";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#c9c1b6" }}>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/music" element={<Music />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
