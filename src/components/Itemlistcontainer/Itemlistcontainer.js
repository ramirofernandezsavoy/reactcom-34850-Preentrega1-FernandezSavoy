import React from "react";
import Cards from "../Cards/Cards";
import "../styles/Itemlistcontainer.css";
import { useParams } from "react-router-dom";
import libros from "../../data/libros";

const ItemListContainer = ({ greeting }) => {
  
  const { categoria } = useParams();
  const filtrado = categoria ? libros.filter((item) => item.categoria === categoria) : libros;
     
  return (
    <div className="item-list-container">
      <div>
        <p className="m-2 fs-5 badge bg-danger text-wrap">
          Bienvenido, {greeting}.
        </p>
      </div>
      <div className="container text-center">
        <div className="wrapper">
          {filtrado.map(
            ({ id, titulo, autor, categoria, img, precio, btnText }, index) => (
              <Cards
                key={index}
                id={id}
                titulo={titulo}
                autor={autor}
                categoria={categoria}
                img={img}
                precio={precio}
                btnText={btnText}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
