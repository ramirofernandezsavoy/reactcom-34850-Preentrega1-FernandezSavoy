import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/Itemlistcontainer/Itemlistcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Item from "./components/Item/Item";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ItemListContainer greeting='John Doe'/>
      <ItemDetailContainer/>
      <Item/>   
    </div>
  );
}

export default App;
