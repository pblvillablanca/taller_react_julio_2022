import logo from './logo.svg';
import './App.css';
import Menu from './componentes/menu/Menu';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Formulario from './componentes/formulario/Formulario';
import VerPersonas from './componentes/verPersonas/VerPersonas'

function App() {
return (
    <div className="App">
   		<BrowserRouter>

		<Menu /> 
		 	<Routes>
				<Route path="formulario" element={<Formulario />} />		
				<Route path="verPersonas" element={<VerPersonas />} />		
			</Routes>	

		</BrowserRouter>
	</div>
  );
}

export default App;
