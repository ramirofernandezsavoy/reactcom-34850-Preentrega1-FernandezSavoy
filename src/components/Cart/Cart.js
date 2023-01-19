import React from "react";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Stack,
} from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import "../styles/Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = ({ isOpen }) => {
  const { closeCart, cartItems } = useCartContext();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <Offcanvas.Title>Tu compra!</Offcanvas.Title>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default Cart;
