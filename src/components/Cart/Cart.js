import React from "react";
import {
  Button,
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
        <Button className="btn-danger w-100">Checkout</Button>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default Cart;
