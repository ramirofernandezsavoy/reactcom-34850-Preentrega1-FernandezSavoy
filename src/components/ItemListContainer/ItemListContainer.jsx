import React from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const { id } = useParams();

  return (
    <div className="item-list-container bg-content">      
      <div>
        <p className="m-2 fs-5 badge bg-danger text-wrap">
          Bienvenido, invitado.
        </p>
      </div>
      <div className="container text-center">
        <div className="ilcwrapper">
          <ItemList id={ id }/>       
        </div>
      </div>
      
    </div>
  );
};

export default ItemListContainer;
