import React, { useContext } from "react";
import logo from "./logo.png";
import "../styles/Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CarritoContext } from "../../context/CartContext";

const Navbar = () => {

const { totalProductos } = useContext(CarritoContext)

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
              <Link to={"/cart"}>
              <Button style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-warning" className="rounded-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"                  
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"                  
                >
                  {" "}
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                </svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center primary" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(35%, 35%)" }}>
                  {totalProductos()}
                </div>
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
