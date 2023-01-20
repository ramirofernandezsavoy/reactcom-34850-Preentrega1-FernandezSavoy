export const dameTotat = (carrito) => {
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      suma = suma + carrito[i].cantidad * carrito[i].precio;
    }
    return suma;
  };
  
  export const verificaSiExisteEnCarrito = (carrito, item) => {    
     return carrito.some((a) => a.id === item.id)
  };
  
  export const unificarItems = (carrito, item) => {  
    return carrito.map((a) => {
      if(a.id === item.id){
        a.cantidad = item.cantidad;
        a.stock = item.stock;
      }
      return a;
    } )
  };
  
  
  export const validarTodoLLeno = (campos) => {
    
    return campos.some((campo) => campo === "")
  }