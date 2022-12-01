import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/Itemlistcontainer/Itemlistcontainer";

// const libros = [
//   {
//     id: 1,
//     titulo: "El nombre del viento",
//     autor: "Patrick Rothfuss",
//     img: "https://http2.mlstatic.com/D_NQ_NP_320015-MLA25096921915_102016-O.jpg",
//     precio: "8.099",
//     btnText: "Comprar",
//   },
//   {
//     id: 2,
//     titulo: "El temor de un hombre sabio",
//     autor: "Patrick Rothfuss",
//     img: "https://images.cdn3.buscalibre.com/fit-in/360x360/54/f6/54f6bab26b3e2e2f3254d2d359240849.jpg",
//     precio: "8.099",
//     btnText: "Comprar",
//   },
//   {
//     id: 3,
//     titulo: "Las puertas de piedra",
//     autor: "Patrick Rothfuss",
//     img: "http://pm1.narvii.com/6199/25b591733e1aafa16fde72bd50fea47136cbea73_00.jpg",
//     precio: "9.499",
//     btnText: "Reservar",
//   },
// ];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ItemListContainer greeting='John Doe'/> 
      <div classname="container text-center">
        
      </div>
    </div>
  );
}

export default App;
