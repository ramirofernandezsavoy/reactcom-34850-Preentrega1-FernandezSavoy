
import CartState from "./context/CartContext";
import GlobalState from "./context/GlobalContext";
import Layout from './Layout/Layout';
import Rutas from './Rutas/Rutas';
import "./App.css";
// import Test from "./components/Test/Test";


function App() {

  return (
    <>
      <GlobalState>
        <CartState>
          <Layout>
            <Rutas />
          </Layout>         
        </CartState>
      </GlobalState>
    </>
    // <Test/>
  );
}

export default App;
