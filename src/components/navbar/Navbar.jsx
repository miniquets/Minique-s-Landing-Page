import React, { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="miniquetsuero__navbar">
      <div className="miniquetsuero_navbar-children-container">
        <div className="miniquetsuero__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="miniquetsuero__navbar-links">
          <div className="miniquetsuero__navbar-links_container">
            <p>
              <a href="#home">Home </a>
            </p>
            <p>
              <a href="#whatminiquetsuero">About </a>
            </p>
            <p>
              <a href="#blog">Blog </a>
            </p>
            <p>
              <a href="possibility">Projects </a>
            </p>
            <p>
              <a href="features">Contact </a>
            </p>
          </div>
        </div>
      </div>

      <div className="miniquetsuero__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu4Line
            color="black"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="miniquetsuero__navbar-menu_container scale-up-center">
            <div className="miniquetsuero__navbar-menu_container-links">
              <p>
                <a href="#home">Home </a>
              </p>
              <p>
                <a href="#whatminiquetsuero">About </a>
              </p>
              <p>
                <a href="#blog">Blog </a>
              </p>
              <p>
                <a href="possibility">Projects </a>
              </p>
              <p>
                <a href="features">Contact </a>
              </p>
            </div>

            <div className="miniquetsuero__navbar-menu_container-links-sign"></div>
            <p>Sign In</p>
            <button type="button">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
