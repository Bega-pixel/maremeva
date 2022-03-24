import React from 'react'
import './Navbar.css'

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
      <img rel="icon" href="https://res.cloudinary.com/dazypdtba/image/upload/v1648054732/Mare%20Meva/logo_anj0un.jpg" type="image" />Your name
      
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      </div>
    </nav>
  );
};

export default Navbar