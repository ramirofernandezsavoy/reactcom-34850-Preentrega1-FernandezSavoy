import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/Itemlistcontainer/Itemlistcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useFirebase from "./hooks/useFirebase";

function App() {

  const {productos,getProducts} = useFirebase()

  useEffect(() => {
    getProducts()  
    return () => {
      
    }
  }, [])

  return (
    <Router>
      <div className="App">
      <Navbar />
      <Banner />      
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Usuario'}/>} />
        <Route path="/category/:categoria" element={<ItemListContainer greeting={'Usuario'}/>} />
        <Route path="/item/detail/:id" element={<ItemDetailContainer/>} />
      </Routes>  
    </div>
    </Router>    
  );
}

export default App;
