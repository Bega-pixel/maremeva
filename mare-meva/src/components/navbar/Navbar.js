import React from 'react'
import './Navbar.css'

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        <ul>
          <li className='item1'><img rel="icon" href="https://res.cloudinary.com/dazypdtba/image/upload/v1648054732/Mare%20Meva/logo_anj0un.jpg" type="image" /> <p>Your name</p></li>
          <li className='item2'><a href="#about"><p>About</p></a></li>
          <li className='item3'><a href="#contact"><p>contact</p></a></li>
        </ul>  

      </div>
    </nav>
  );
};

export default Navbar