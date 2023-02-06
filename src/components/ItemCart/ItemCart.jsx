import React from "react";
import { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import { CarritoContext } from "../../context/CartContext";
import "../styles/ItemCart.css";

const ItemCart = (item) => {
  const {
    product: {
      item: { titulo, precio, img, id },
      quantity,
    },
  } = item;
  const { borrarProducto } = useContext(CarritoContext);

  return (
    <>
      <div>
        <Stack className="card-main cart-card" direction="horizontal">
          <div>
            <h4 className="overImg bg-warning">{quantity}x</h4>
            <img
              src={img}
              alt={item.title}
              className="img-fluid img-thumbnail img-container m-2"
              style={{ maxHeight: "100px" }}
            />
          </div>
          <div className="p-2 w-100">
            <h5 className="text-start mx-2">{titulo}</h5>
            <div>
              <Stack direction="horizontal">
                <p className="fw-light p-1">
                  Unidad: $ <span className="fw-bold">{precio}</span>
                </p>
                <p className="fw-light p-1">
                  Total ARS $       
                  <span className="fw-bold">{quantity * precio}</span>
                </p>
              </Stack>
            </div>
          </div>
          <Button
            variant="danger"
            className="m-3 rounded-circle"
            onClick={() => borrarProducto(id)}
          >
            X
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default ItemCart;
