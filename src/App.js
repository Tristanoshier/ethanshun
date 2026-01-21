import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Music from "./pages/Music";
import Bakery from "./pages/Bakery";
import Contact from "./pages/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Ethan Shun</div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link to="/music" onClick={closeMenu}>
            Music
          </Link>
          <Link to="/bakery" onClick={closeMenu}>
            Bakery
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/music" element={<Music />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
