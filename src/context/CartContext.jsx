import React, {createContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';


export const CarritoContext = createContext('');

const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    
    const limpiarCarrito = () => setCarrito([])
    
    const estaEnCarrito = (id) => {
        return carrito.find((product)=> product.item.id === id) ? true : false;
    }
    
    const borrarProducto = (id) => {
        let bProducto = carrito.filter((item) => item.item.id !== id)
        setCarrito(bProducto)
    }

    const onAddProducto = (item, quantity) => {
        if (estaEnCarrito(item.item.id)) {
            setCarrito(carrito.map((product) => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        }else{
            setCarrito([...carrito, {...item, quantity}])
        }
        toast(`Se agregaron ${quantity} unidades al carrito`, {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: true,
			draggable: false,
			theme: "light",
			});
    }
    
    const validarFormulario = (campos) => {
        return campos.some((campo) => campo === "")
    }
    
    const totalCompra = () => {
        return carrito.reduce((acumulador, product) =>  acumulador + product.item.price * product.quantity, 0)
    }
    

    const totalProductos = () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    return (
        <CarritoContext.Provider value={{
            totalCompra,
            totalProductos,
            validarFormulario,
            onAddProducto,
            limpiarCarrito, 
            estaEnCarrito, 
            borrarProducto,
            carrito}}
            > 
            {children}
            <ToastContainer />
        </CarritoContext.Provider>
    )
}

export default CarritoContextProvider