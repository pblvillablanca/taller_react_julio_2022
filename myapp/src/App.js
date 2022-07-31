import logo from './logo.svg';
import './App.css';
import Menu from './componentes/menu/Menu';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Formulario from './componentes/formulario/Formulario';


function App() {
return (
    <div className="App">
   		<BrowserRouter>

		<Menu /> 
		 	<Routes>
				<Route path="formulario" element={<Formulario />} />		
			</Routes>	

		</BrowserRouter>
	</div>
  );
}

export default App;
