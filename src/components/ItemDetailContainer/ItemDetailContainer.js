import React from 'react'
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const { id } = useParams()
    const {getProduct, productos, loading} = useFirebase()

    useEffect(() => {
        getProduct(id)
    
        return () => {
            
    }
    }, []) 
    
    const filter = id? productos.filter((product) => product.id === id) : null

    return (
        <>
            <section>
                {loading && <Spinner/>}
                    {filter.map(({id, titulo, stock, categoria, img, sinopsis, autor, precio}, index) => (
                        <div>
                            <ItemDetail
                            key={index}
                            id={id}
                            titulo={titulo}                             
                            img={img}                            
                            categoria={categoria}
                            stock={stock}
                            sinopsis={sinopsis}
                            autor={autor}
                            precio={precio}
                            />
                        </div>
                    ))}
            </section>
        </>
        
    )
}

export default ItemDetailContainer