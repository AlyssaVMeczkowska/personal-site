import { useState, useEffect } from "react";

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
       {/* <a href="#projects">Projects</a> */}
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssa-meczkowska/">LinkedIn</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlyssaVMeczkowska/">Github</a>
        <div id="indicator"></div>
      </nav>
      <nav id="hamburger-menu">
        <button class="hamburger-button" onClick={() => setIsOpen(prev => !prev)}> ☰ </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssa-meczkowska/">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlyssaVMeczkowska/">Github</a>
        </div>
      </nav>
    </Router>
  )
}