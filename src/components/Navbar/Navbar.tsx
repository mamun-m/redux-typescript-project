import logo from "../../assets/reduxlogo.svg";
import menuopen from "../../assets/menu-open.svg";
import menuclose from "../../assets/close-svg-black.svg";
import "./Navbar.css";
import { useRef } from "react";

const Navbar = () => {
  // Change 'use' to 'menuRef' for clarity
  const menuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo to trigger menu opening */}
        <img src={logo} alt="logo" onClick={openMenu} />

        {/* Menu open icon */}
        <img
          src={menuopen}
          className="menuopen"
          alt="menu open"
          onClick={openMenu}
        />

        {/* Menu (initially hidden with right: -350px) */}
        <ul className="nav-menu" ref={menuRef} style={{ right: "-350px" }}>
          {/* Close icon */}
          <img
            src={menuclose}
            className="menuclose"
            alt="close menu"
            onClick={closeMenu}
          />

          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#work">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="contact-me">
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
