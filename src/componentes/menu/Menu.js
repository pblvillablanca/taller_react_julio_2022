import React from 'react'
import {Link} from 'react-router-dom'

function Menu(){
	return  <> 
		<nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="badges.html">Components</a></li>
        <li><Link to="formulario">Formulario</Link></li>
      </ul>
    </div>
  </nav>
	</>
}

export default Menu
