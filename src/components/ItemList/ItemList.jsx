import { useEffect } from "react";
import useFirebase from "../../hooks/useFirebase/";
import Cards from "../Cards/Cards";

const ItemList = (props) => {
  const { id } = props;
  const { products, getProducts, filterProducts, filteredProducts } = useFirebase();

  useEffect(() => {
    !id ? getProducts() : filterProducts(id);
  }, [id]);

  const showCards = !id ? products : filteredProducts;
  const items = showCards.map(
    ({ id, titulo, autor, categoria, img, precio, btnText, stock }) => {
      return (
        <Cards
          key={id}
          titulo={titulo}
          autor={autor}
          categoria={categoria}
          img={img}
          precio={precio}
          btnText={btnText}
          stock={stock}
        />
      );
    }
  );

  return (
    <div className="container text-center">
      <div className="ilcwrapper">{items}</div>
    </div>
  );
};

export default ItemList;
