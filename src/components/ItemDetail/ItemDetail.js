import ItemCount from '../ItemCount/ItemCount'
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = (item) => {
	const {id, titulo, stock, categoria, img, sinopsis, autor, precio} = item

    return (
		<>
			<div className="container p-3">      
      <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 img-fluid p-3 d-flex justify-content-center align-items-center">
          <img src={img} className="img-fluid rounded w-100" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title h1">{titulo}</h3>
            <p className="card-text fs-6">
            {sinopsis}
            </p>
            <p><strong className="card-text h4">
            $ {precio}
            </strong>
            </p>
            <p className="card-text">
              <small className="text-muted lead">{autor}</small>              
            </p>
            <p className="card-text">
              <small className="text-muted lead">{categoria}</small>
            </p>			       
			{<ItemCount item={item} />}     
          </div>
        </div>
      </div>
    </div>      
    </div>
		</>
    )
}

export default ItemDetail