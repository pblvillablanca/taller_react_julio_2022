import React,{useState} from 'react'

const Formulario = ()=>{
	
	const [persona,setPersona] = useState({})
	
	function enviarForm(e){
		e.preventDefault()	
	}

	function capturaDatos(e){
		setPersona({
			...persona,
			[e.target.name]:e.target.value
		})
	}

	return <>
		<div className="container">	
		<h4 className="center">Ingrese su información</h4>
		
		<div className="row">
    			<form className="col s12" onSubmit={enviarForm}>
      				<div className="row">
        			<div className="input-field col s12">
          				<input placeholder="Placeholder" id="first_name" 
						name="nombre" onChange={capturaDatos}  type="text" className="validate" />
          				<label htmlFor="first_name">First Name</label>
        			</div>
      				</div>
				<div className="row">
		  		<div className="input-field col s12">
    					<select className="browser-default" name="pais" onChange={capturaDatos}>
      						<option value="" disabled >Choose your option</option>
      						<option value="1">Baltica</option>
      						<option value="2">Dorada</option>
      						<option value="3">Escudo</option>
    					</select>
  				 </div>
				</div>
				<div className="row">
				<button className="btn waves-effect waves-light" type="submit" name="action">Enviar
    					<i className="material-icons right">send</i>
  				</button>
				</div>
			</form>
		</div>
		</div>	
		
		</>
}

export default Formulario
