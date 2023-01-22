import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Views/Home"
import Checkout from "../Views/Checkout"
import Category from "../Views/Category"
import Individual from "../Views/Individual"


const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/category/:category" element={<Category />}/>
        <Route path="/item/detail/:id" element={<Individual />}/>        
      </Routes>
    </Router>
  );
};

export default Rutas;