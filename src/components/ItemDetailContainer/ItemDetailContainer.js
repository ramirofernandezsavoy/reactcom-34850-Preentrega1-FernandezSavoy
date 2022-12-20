import React from "react";
import '../styles/ItemDetailContainer.css';
import {useParams } from "react-router-dom";
import libros from "../../data/libros";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {  

const {id} = useParams()
const resultado = libros.filter((item) => item.id === Number(id))

  return (
    <div className="container p-3">
    {resultado.map(
            ({ id, titulo, autor, sinopsis, categoria, img, precio, btnText }, index) => (
              <ItemDetail
                key={index}
                id={id}
                titulo={titulo}
                autor={autor}
                sinopsis={sinopsis}
                categoria={categoria}
                img={img}
                precio={precio}
                btnText={btnText}
              />
            )
          )}
  </div>
  );
};

export default ItemDetailContainer;
