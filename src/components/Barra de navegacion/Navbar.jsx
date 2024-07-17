import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <header className='nav__wrapper'>
      <nav className="nav">
        <div className="nav__logo">
          <img src="https://placehold.jp/150x150.png" alt="Logo" />
        </div>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#location">Ubicación</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
