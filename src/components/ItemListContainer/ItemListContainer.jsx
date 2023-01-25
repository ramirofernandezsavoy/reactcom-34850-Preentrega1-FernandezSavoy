import React, { useEffect} from "react";
import { GlobalProvider } from "../../context/GlobalContext";
import useFirebase from "../../hooks/useFirebase";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ filtro }) => {

  const { productos, getProducts } = useFirebase();
  const { buscar } = GlobalProvider();

  useEffect(() => {
    getProducts();
  }, );

  // const filtered = filtro
  // ? productos.filter((e) => e.categoria === filtro)
  // : productos;

  const filtered = productos;

  const busqueda = filtered.filter((f) =>
  f.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase()));

  return (
    <div className="item-list-container bg-content">      
      <div>
        <p className="m-2 fs-5 badge bg-danger text-wrap">
          Bienvenido, invitado.
        </p>
      </div>
      <div className="container text-center">
        <div className="ilcwrapper">
          <ItemList items={ busqueda }/> 
        </div>
      </div>
      
    </div>
  );
};

export default ItemListContainer;
