import React from "react";
import Cards from "../Cards/Cards";
import "../styles/Itemlistcontainer.css";
import { useParams } from "react-router-dom";
import libros from "../../data/libros";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";




const ItemListContainer = ({ greeting }) => {
  
  const { categoria } = useParams();     
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCards = () => {
    setLoading(true);
    const operacion = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoria ? libros.filter((item) => item.categoria === categoria) : libros);
         reject()
      }, 2000);
    });

    operacion
      .then((resultado) => {        
        setCards(resultado);        
      })
      .catch((err) => {
        console.log("Algo fallo")   
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCards();
    return () => {
      setCards([]);
    };
  }, []);

  return (
    <div className="item-list-container">
      {loading && <Spinner/>}
      <div>
        <p className="m-2 fs-5 badge bg-danger text-wrap">
          Bienvenido, {greeting}.
        </p>
      </div>
      <div className="container text-center">        
        <div className="wrapper">
          {!loading && cards.length > 0           
          ? cards.map(
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
          )
        : !loading && cards.length < 1 && (
        <h1>Algo fallo, intenta mas tarde.</h1>
        )}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
