import React from 'react'
import Cards from '../Cards/Cards'

const ItemList = ({items}) => {
    return (
        <div className="row p-2  p-lg-5 full-height align-items-center">
         { items && items.map((elemento) => (
             <Cards 
             key={elemento.id}
             item={elemento}
             />
         ))} 
        {items.length < 1 &&
         <h1 className="display-4 text-dark text-center bg-light mt-5 text-uppercase">
             No se hayó un resultado que coincida con los criterios de búsqueda.
        </h1>
         }
        </div>
    )
}

export default ItemList
