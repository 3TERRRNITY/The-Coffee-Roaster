import React, { useState } from "react";
import "./Navbar.scss";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ navbarLinks }) {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div className="fixed-top">
      <nav className="navbar">
        <span className="navbar-logo">COFFEE HOUSE</span>

        {menuClicked ? (
          <FiMenu size={25} className="navbar-menu" onClick={toggleMenuClick} />
        ) : (
          <FiX size={25} className="navbar-menu" onClick={toggleMenuClick} />
        )}

        <ul
          className={
            menuClicked ? "navbar-list" : "navbar-list navbar-list--active"
          }
        >
          {navbarLinks.map((item) => (
            <li className="navbar-item">
              <a href={item.url} className="navbar-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
