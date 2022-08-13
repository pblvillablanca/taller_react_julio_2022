import React from 'react'

const ItemPersona = ({persona})=>{

	return <>
	  <ul className="collection">
    <li className="collection-item avatar">
      <i className="material-icons circle">person</i>
      <span className="title">{persona.nombre}</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
  </ul>
		</>
}

export default ItemPersona
