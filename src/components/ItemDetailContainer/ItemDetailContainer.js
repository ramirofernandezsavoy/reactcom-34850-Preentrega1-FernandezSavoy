import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../styles/ItemDetailContainer.css';
import {useParams } from "react-router-dom";
import libros from "../../data/libros";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";


const ItemDetailContainer = () => {  
const {id} = useParams()
const [resultado, setResultado] = useState()

useEffect(() => {

  setTimeout(() => {
    setResultado(libros.filter((item) => item.id === Number(id)))  
  }, 2000);

  return () => {
    
  }
}, [])


  return (
    <div className="container p-3">
      {resultado ?    
      resultado.map(
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
          )
      : <Spinner/>}            
  </div>
  );
};

export default ItemDetailContainer;
