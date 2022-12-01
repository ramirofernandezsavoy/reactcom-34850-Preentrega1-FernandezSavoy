import React from "react";
import Cards from "../Cards/Cards";
import '../styles/Itemlistcontainer.css';


const libros = [
  {
    id: 1,
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    img: "https://http2.mlstatic.com/D_NQ_NP_320015-MLA25096921915_102016-O.jpg",
    precio: "8.099",
    btnText: "Comprar",
  },
  {
    id: 2,
    titulo: "El temor de un hombre sabio",
    autor: "Patrick Rothfuss",
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/54/f6/54f6bab26b3e2e2f3254d2d359240849.jpg",
    precio: "8.099",
    btnText: "Comprar",
  },
  {
    id: 3,
    titulo: "Las puertas de piedra",
    autor: "Patrick Rothfuss",
    img: "http://pm1.narvii.com/6199/25b591733e1aafa16fde72bd50fea47136cbea73_00.jpg",
    precio: "9.499",
    btnText: "Reservar",
  },
  {
    id: 4,
    titulo: "El retorno de los dragones",
    autor: "Margaret Weis & Tracy Hickman",
    img: "https://m.media-amazon.com/images/I/81Ce3Sen-2L.jpg",
    precio: "8.099",
    btnText: "Comprar",
  },
  {
    id: 5,
    titulo: "La tumba de Huma",
    autor: "Margaret Weis & Tracy Hickman",
    img: "https://m.media-amazon.com/images/I/81iZKkSgtGL.jpg",
    precio: "8.099",
    btnText: "Comprar",
  },
  {
    id: 6,
    titulo: "La reina de la oscuridad",
    autor: "Margaret Weis & Tracy Hickman",
    img: "https://contentv2.tap-commerce.com//cover/large/9788448038953_1.jpg?id_com=717",
    precio: "8.099",
    btnText: "Comprar",
  },
  {
    id: 7,
    titulo: "El templo de Istar",
    autor: "Margaret Weis & Tracy Hickman",
    img: "https://http2.mlstatic.com/D_NQ_NP_823651-MLA29212040051_012019-O.jpg",
    precio: "8.099",
    btnText: "Comprar",
  },
  {
    id: 8,
    titulo: "Las guerras de los enanos",
    autor: "Margaret Weis & Tracy Hickman",
    img: "https://imagessl9.casadellibro.com/a/l/t5/79/9788448001179.jpg",
    precio: "8.099",
    btnText: "Comprar",
  },
  {
    id: 9,
    titulo: "El umbral del poder",
    autor: "Margaret Weis & Tracy Hickman",
    img: "https://contentv2.tap-commerce.com/cover/large/9788448000523_1.jpg?id_com=1174",
    precio: "8.099",
    btnText: "Comprar",
  },
];

const ItemListContainer = (props) => {
  const {greeting} = props;
  return (
    <div className="item-list-container">
      <div>
        <p className="m-2 fs-5 badge bg-danger text-wrap">Bienvenido, {greeting}.</p>
      </div>
      <div classname="container text-center">
        <div className="wrapper">
          {libros.map(({ id, titulo, autor, img, precio, btnText }, index) => (
            <Cards
              key={index}
              titulo={titulo}
              autor={autor}
              img={img}
              precio={precio}
              btnText={btnText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
