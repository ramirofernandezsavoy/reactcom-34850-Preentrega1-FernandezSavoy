import React from 'react'
import { createContext, useContext, useState } from 'react'
import Cart from '../components/Cart/Cart';

const CartContext = createContext({})

export function useCartContext() {
    return useContext(CartContext)
}
export function CartProvider({ children }) {
const [isOpen, setisOpen] = useState(false)
const [cartItems, setcartItems] = useState([])

const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 
    0 )

const openCart = () => setisOpen(true)
const closeCart = () => setisOpen(false)

// Functions
// Checks if Quantity exists or else it uses 0.
const getQuantity = (id) => cartItems.find(item => item.id === id)?.quantity || 0;

// Increases Quantity of ID item by 1.
const incQuantity = (id) => {
    setcartItems(currentItems => {
        if (currentItems.find(item => item.id === id) == null) {
            return [...currentItems, {id, quantity: 1 }]
        } else {
            return currentItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1}
                } else {
                    return item
                }
            })
        }
    })
}

// Decreases Quantity of ID item by 1.
const decQuantity = (id) => {
    setcartItems(currentItems => {
        if (currentItems.find(item => item.id === id)?.quantity === 1) {
            return currentItems.filter(item => item.id !== id)
        } else {
            return currentItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1}
                } else {
                    return item
                }
            })
        }
    })
}

// Removes items with matching ID.
const removeFromCart = (id) => {
    setcartItems(currentItems => {
        return currentItems.filter(item => item.id !== id)
    })
}

    return (
        <CartContext.Provider value={{getQuantity, incQuantity, decQuantity, removeFromCart, openCart, closeCart, cartItems, cartQuantity }}>
            {children}
            <Cart isOpen={isOpen}/>
        </CartContext.Provider>
    )
}

export default CartContext