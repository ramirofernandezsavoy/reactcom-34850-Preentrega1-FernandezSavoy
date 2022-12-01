import React from "react";
import "../styles/Cart.css";

const Cart = () => {
  return (
    <div>
      <a href="...">
        <i className="bi bi-cart3 h2 link-danger cart-widget position-relative"></i>
      </a>
      <span className=" cart-counter position-absolute bg-white text-center text-danger translate-middle h5 ">
        3
      </span>
    </div>
  );
};

export default Cart;
