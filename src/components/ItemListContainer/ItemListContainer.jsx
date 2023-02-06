import React from "react";
import Cards from "../Cards/Cards";
import "../styles/Itemlistcontainer.css";
import { useParams } from "react-router-dom";
import libros from "../../data/libros";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {
  
  const { categoria } = useParams();
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setRes(
        categoria
          ? libros.filter((item) => item.categoria === categoria)
          : libros
      );
      setLoading(false);
    }, 2000);    
  }, [categoria]);

  return (
    <div className="item-list-container">
      
      <div>
        <p className="m-2 fs-5 badge bg-danger text-wrap">
          Bienvenido, usuario.
        </p>
      </div>
      <div className="container text-center">
        <div className="ilcwrapper">
          {loading ? (
            <Spinner/>
          ) : 
            res.map(
              (
                { id, titulo, autor, categoria, img, precio, btnText },
                index
              ) => (
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
};

export default ItemListContainer;
