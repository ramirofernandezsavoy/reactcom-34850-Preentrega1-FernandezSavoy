import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CartContext";
import useFirebase from "../../hooks/useFirebase";
import Swal from "sweetalert2";
import { Button, Stack } from "react-bootstrap";
const Formulario = ({ total, compra }) => {
  const { getTicket } = useFirebase();
  const { limpiarCarrito, validarFormulario } = useContext(CarritoContext);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form", formData.nombre);
    if (
      validarFormulario([
        formData.nombre,
        formData.apellido,
        formData.mail,
        formData.telefono,
        formData.mensaje,
      ])
    ) {
      Swal.fire({
        title: "Oops!",
        text: "Faltan campos por completar",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Orden de compra confirmada",
      text: `Recibira un mail con los datos de su compra`,
      timerProgressBar: false,
      showConfirmButton: true,
      confirmButtonText: "Ver orden de compra",      
      icon: "success",
    });
    getTicket({ datos: formData });
    limpiarCarrito();
  };

  return (
    <>
      <form className="d-flex" style={{ padding: "10px" }} onSubmit={onSubmit}>
        <Stack gap={3} className="w-50">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Telefono"            
            value={formData.telefono}
            onChange={handleChange}
            style={{resize: "none"}}
          />
          <textarea
            type="text"
            name="mensaje"
            placeholder="Escriba su mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
          <Button className="btn w-100" variant="dark" type="submit">
            Terminar compra
          </Button>
          <Link to="/">
            <Button className="btn w-100" variant="dark">
              Seguir comprando
            </Button>
          </Link>
          <Button
            className="btn w-100"
            variant="danger"
            onClick={() => limpiarCarrito()}
          >
            Vaciar el carrito
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Formulario;
