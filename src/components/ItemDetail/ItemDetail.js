import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const ItemDetail = (props) => {

  const { sinopsis, titulo, autor, categoria, img, precio} = props;
  const {getQuantity, incQuantity, decQuantity, removeFromCart, id} = useCartContext();
  const quantity = getQuantity()  

  return (
    <div className="container p-3">      
      <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 img-fluid p-3">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title h1">{titulo}</h3>
            <p className="card-text fs-6">
            {sinopsis}
            </p>
            <p><strong className="card-text h4">
            {precio}
            </strong>
            </p>
            <p className="card-text">
              <small className="text-muted lead">{autor}</small>              
            </p>
            <p className="card-text">
              <small className="text-muted lead">{categoria}</small>
            </p>
            <div className='mt-auto'>
              {quantity === 0 ?(
                <div className='d-flex align-items-center justify-content-center'><Link className="w-50 btn btn-danger" onClick={() => incQuantity(id)}> Agregar al carrito</Link></div>
              ) : (
                <div
                className='d-flex align-items-center flex-column justify-content-center' style={{gap: ".5rem"}}
                >
                  <div 
                  className='d-flex align-items-center justify-content-between w-50' style={{gap: ".5rem"}}
                  >
                    <Link className="w-25 btn btn-dark" onClick={() => decQuantity(id)}>-</Link>                    
                    <div><span className='fs-3'>{quantity}</span> en el carrito.</div>
                    <Link className="w-25 btn btn-dark" onClick={() => incQuantity(id)}>+</Link>
                  </div>
                  <Link className="w-50 btn btn-warning" onClick={() => removeFromCart(id)}>Limpiar</Link>
                </div>
              )}
            </div>           
          </div>
        </div>
      </div>
    </div>      
    </div>
  )
}

export default ItemDetail