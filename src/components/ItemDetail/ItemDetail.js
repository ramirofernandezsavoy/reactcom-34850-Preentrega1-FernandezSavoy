import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = (props) => {

  const { sinopsis, titulo, autor, categoria, img, precio} = props;  

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
            <p className="card-text">
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
            <Link to="/cart" className="btn btn-danger">
            Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>      
    </div>
  )
}

export default ItemDetail