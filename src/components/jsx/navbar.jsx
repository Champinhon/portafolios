import React, { useState } from "react";
import "../css/navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        <img src="logo.png" alt="loguito" className="loguito" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            Sobre mí
          </a>
        </li>
        <li className="nav__item">
          <a href="/portfolio" className="nav__link">
            Currículum
          </a>
        </li>
        <li className="nav__item">
          <a href="/skills" className="nav__link">
            Habilidades
          </a>
        </li>
        <li className="nav__item">
          <a href="/contact" className="nav__link">
            Contáctame
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;