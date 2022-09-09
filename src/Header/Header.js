import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="header" id="home">
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
      </div>
    </>
  );
}
