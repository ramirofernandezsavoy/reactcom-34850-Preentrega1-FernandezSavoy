import { createContext, useContext, useState } from "react";
import { unificarItems, verificaSiExisteEnCarrito } from "../helpers";
import { GlobalProvider } from "./GlobalContext";

const CartContext = createContext();

export const CartProvider = () => useContext(CartContext);

const CartState = ({ children }) => {
  const { setMostrarAlerta } = GlobalProvider();

  const [carrito, setCarrito] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const agregarAlCarrito = (item) => {
    if (verificaSiExisteEnCarrito(carrito, item)) {
      setCarrito(unificarItems(carrito, item));
      setMostrarAlerta(true);
      return;
    }
    setCarrito([...carrito, item]);
    setMostrarAlerta(true);
  };

  const sacarDelCarrito = (id) => {
    let nuevoCarrito = carrito.filter((e) => e.id !== id);
    setCarrito(nuevoCarrito);
  };

  const limpiarTodoElCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        isOpen,
        agregarAlCarrito,
        limpiarTodoElCarrito,
        sacarDelCarrito,
        openCart,
        closeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;