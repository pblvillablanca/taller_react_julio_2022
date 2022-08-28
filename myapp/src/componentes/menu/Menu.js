import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../context/AppContext'

function Menu(){

  const {nombreUsuario} =  useContext(Context)

	return  <> 
		<nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="badges.html">Components</a></li>
        <li><Link to="formulario">Formulario</Link></li>
        <li><Link to="verPersonas">Ver personas</Link></li>
        <li><Link to="verPersonas">Nombre usario: {nombreUsuario}</Link></li>
        
      </ul>
    </div>
  </nav>
	</>
}

export default Menu
