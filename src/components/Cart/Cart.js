import React from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Stack } from "react-bootstrap";
import "../styles/Cart.css";
import CartItem from "../CartItem/CartItem"

const Cart = ({ isOpen }) => {
  // const { closeCart, carrito } = CartContext();

  return (
    // <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas>
      <OffcanvasHeader closeButton>
        <Offcanvas.Title>Tu compra!</Offcanvas.Title>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
          <CartItem>
            <h4>Name: Book</h4>
            <img src="..." alt="..." />
            <p>Hola</p>
          </CartItem>
        </Stack>
        <Button className="btn-danger w-100">Checkout</Button>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default Cart;
