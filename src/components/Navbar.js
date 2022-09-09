import React, { useState } from "react";
import "./Navbar.scss";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ navbarLinks }) {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <>
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
      {/* <div className="header" id="home">
        <div className="menu">
          <div className="logo">
            <a href="#home">COFFEE HOUSE</a>
          </div>
          <nav>
            <a href="#home">HOME</a>
            <a href="#whyus">WHY US</a>
            <a href="#menu">MENU</a>
            <a href="#locations">OUR LOCATIONS</a>
            <a href="#letters">NEWSLETTER</a>
          </nav>
        </div>
        <div className="welcome-text">
          <h1>The Coffee Roasters</h1>
          <p>
            We source our coffee seasonally, from farmers who care, and roast to
            highlight what makes them special.
          </p>
          <button>View our menu</button>
        </div>
      </div> */}
    </>
  );
}
