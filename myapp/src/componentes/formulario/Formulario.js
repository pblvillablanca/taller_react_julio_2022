import React from 'react'
import Hijo from './Hijo'

const Formulario = ()=>{
	function saluda(){
		alert('Hola!')
	}	
	return <>
		<h3>Formulario</h3>
<Hijo saludo={'Hola Pablo'} mtd={saluda}  />
		</>
}

export default Formulario
