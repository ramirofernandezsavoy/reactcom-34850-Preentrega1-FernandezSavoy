import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/Itemlistcontainer/Itemlistcontainer";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ItemListContainer greeting='John Doe'/>       
      <Spinner/>
    </div>
  );
}

export default App;
