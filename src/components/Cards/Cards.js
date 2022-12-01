import React from "react";
import "../styles/Cards.css"

const Cards = (props) => {
  const { titulo, autor, img, precio, btnText } = props;
  return (
    <div className="card mb-3 p-2 card-main">
      <div className="row g-0">
        <div className="col-md-4 img-container">
          <img src={img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{precio}</p>
            <p className="card-text">
              <small className="text-muted">{autor}</small>
            </p>
            <a href="..." className="btn btn-danger">
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
