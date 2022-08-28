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
import EditarPersona from './componentes/editarPersona/EditarPersona';
import AppContext from './context/AppContext';

function App() {
return (
    <div className="App">
		<AppContext>
			<BrowserRouter>

				<Menu /> 
				<Routes>
					<Route path="formulario" element={<Formulario />} />		
					<Route path="verPersonas" element={<VerPersonas />} />
					<Route path="editarPersona/:idPersona" element={<EditarPersona /> } />
				</Routes>	

			</BrowserRouter>
		</AppContext>
	</div>
  );
}

export default App;
