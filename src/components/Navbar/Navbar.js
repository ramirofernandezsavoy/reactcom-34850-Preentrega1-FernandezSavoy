import React from "react";
import Cart from "../Cart/Cart";
import logo from "./logo.png";
import '../styles/Navbar.css'

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 text-center">
        <div className="container">          
          <a href="#Texto1" className="navbar-brand">
            <img src={logo} alt="logo" className="p-0 m-0 logo-img"/>            
          </a>                    
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
                <a href="#Texto1" className="nav-link">
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a href="#Texto2" className="nav-link">
                  Lista de deseados
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="#Texto3" className="nav-link">
                  Nosotros
                </a>
              </li> */}
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Género
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="...">Fantasía</a></li>
            <li><a className="dropdown-item" href="...">Ciencia Ficción</a></li>            
            <li><a className="dropdown-item" href="...">Thriller</a></li>
          </ul>
        </li>
            </ul>
            <Cart />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
