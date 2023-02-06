import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { CarritoContext } from '../../context/CartContext'
import useContador from '../../hooks/useContador'



const ItemCount = (item) => {

    const props = item.item;
    const {stock, offer} = props;
    const { decrease, increase, count } = useContador()

    
    const [irACarrito, setIrACarrito] = useState(false);
	const {onAddProducto} = useContext(CarritoContext)
    const navigate = useNavigate();


    const onAdd = (quantity) => {
        setIrACarrito(true);
        onAddProducto(item, quantity)
    }

    return (
    <>
        <div>
            <Stack direction="horizontal" gap={3} className='d-flex justify-content-around' >
                <Stack direction="horizontal" gap={3} >
                    <Button variant='warning m-1' disabled={count <= 1} onClick={decrease} className='counter__b'> - </Button>
                    <h4 className='counter__h'>{count}</h4>
                    <Button variant='warning m-1' disabled={count >=stock} onClick={increase} className='counter__b'> + </Button>
                </Stack>            
                <Button variant='danger m-1'
                disabled={ stock <= 0} 
                onClick={() => onAdd(count)}
                className="w-100">
                    Agregar al Carrito
                </Button>
            </Stack>            
        {
            irACarrito ?
            <Stack gap={1} className='d-flex justify-content-evenly' >
                <Link onClick={() => navigate(-1)} item={item}><Button variant='dark w-100'>Seguir comprando</Button></Link>
                <Link to='/cart' item={item}><Button variant='dark w-100'>Finalizar compra</Button></Link>
            </Stack>
            : null
        }
        </div>
    </>
    )
}

export default ItemCount