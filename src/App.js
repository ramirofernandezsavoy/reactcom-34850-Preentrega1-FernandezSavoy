import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Itemlistcontainer/Itemlistcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {

//   import { useEffect } from "react";
// import useFirebase from "./hooks/useFirebase";
  // const {productos,getProducts} = useFirebase()

  // useEffect(() => {
  //   getProducts()  
  //   return () => {
      
  //   }
  // })

  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <Cart />    
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Usuario'}/>} />
          <Route path="/category/:categoria" element={<ItemListContainer greeting={'Usuario'}/>} />
          <Route path="/item/detail/:id" element={<ItemDetailContainer/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
