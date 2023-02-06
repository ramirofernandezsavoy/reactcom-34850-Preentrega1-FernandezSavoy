import './App.css';
import Layout from './Layout/Layout'
import CarritoContextProvider from './context/CartContext';
import Rutas from './Rutas/Rutas';
import { BrowserRouter as Router } from 'react-router-dom'



function App() {
	return (
		<>
		<div className='App'>
			<Router>
				<CarritoContextProvider>
					<Layout>
						<Rutas/>
					</Layout>
				</CarritoContextProvider>
			</Router>
		</div>
		</>
	);
}

export default App;