import React from "react";
import "../styles/Cards.css"
import { Link } from "react-router-dom";

const Cards = ({ id, titulo, autor, categoria, img, precio, btnText, stock }) => {  

  return (
    <div className="card mb-3 p-2 card-main">
      <div className="row g-0">
        <div className="col-md-4 img-container">
          <img src={img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title h6">{ titulo }</h3>
            <p className="card-text">{ precio }</p>
            <p className="card-text">
              <small className="text-muted">{ autor }</small>              
            </p>
            <p className="card-text">
              <small className="text-muted">{ categoria }</small>
            </p>
            <p className="card-text">
              <small className="text-muted">Stock:{ stock} </small>
            </p>
            
            <Link to={`/item/detail/${id}`} className="btn btn-danger">
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
