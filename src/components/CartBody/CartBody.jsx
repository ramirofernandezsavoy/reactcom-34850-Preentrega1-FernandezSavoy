import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import Formulario from '../Formulario/Formulario'
import { Button, Stack } from 'react-bootstrap'

const Cart = (item) => {
    const{carrito, totalCompra} = useContext(CarritoContext)
    console.log(carrito, totalCompra)
    
    if (carrito.length === 0) {
        return(
            <>
            <Stack>
                <h2 className='h2 m-auto p-3 text-light'>No hay productos en el carrito</h2>
                <Link className='m-auto p-3' to='/'><Button variant='danger m-1'>Volver al Home</Button></Link>
            </Stack>
            </>
        );
    }

    return (
        <>
        <div style={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "20px", margin: "10px"}}>               
            <Stack gap={5} direction='horizontal' className='d-flex justify-content-around align-items-center'>                                                             
                        <Stack className='' style={{backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "20px", margin: "10px", padding: "10px"}}>
                        <h2 className='h2 text-black'>Carrito</h2>
                            {carrito.map((product) => <ItemCart  product={product} key={product.id}/>)}
                            <p className='text-end p-3 fw-bold h4'>Total $ARS <span className='fw-light'>{totalCompra()}</span></p>                          
                        </Stack>                
                <Stack style={{backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "20px", margin: "10px", padding: "10px"}}>
                    <h4 className='h2 text-black'>Formulario de compra</h4>
                    <div>
                        
                    </div>
                    <Formulario/>
                </Stack>
            </Stack>
            </div>
        </>
    )
}

export default Cart