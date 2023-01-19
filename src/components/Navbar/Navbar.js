import React from "react";
import Cart from "../Cart/Cart";
import logo from "./logo.png";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 text-center">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="p-0 m-0 logo-img" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Género
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/category/fantasia">
                      Fantasía
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/category/ciencia_ficcion"
                    >
                      Ciencia Ficción
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/category/thriller">
                      Thriller
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <i className="bi bi-cart3 h2 link-danger cart-widget position-relative"></i>
              <span className=" cart-counter position-absolute bg-white text-center text-danger translate-middle h5 ">3</span>
            </div>            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
