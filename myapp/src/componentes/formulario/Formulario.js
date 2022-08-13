import React,{useState} from 'react'
import swal from 'sweetalert2'

const Formulario = ()=>{
	
	const [persona,setPersona] = useState({})
	
	const [cargando,setCargando] = useState(false)

	function enviarForm(e){


		e.preventDefault()
		
		setCargando(true)
		
		console.log('enviar form')
		console.log(persona)

		fetch('http://localhost:8080/crearPersona',{
			method:'POST',
			body:JSON.stringify(persona),
			headers:{'Content-Type':'application/json'}
		})
		.then(res=>res.json())
		.then(docFinal=>{
			console.log(docFinal)
			setCargando(false)
			swal.fire('Información','La persona se guardó correctamente','info')
		})
		.catch(err=>{
			console.log(err)
			swal.fire('Error','Algo anda mal!, no se guardó la persona','error')
		})

	}

	function handleData(e){
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
                                        <input onChange={handleData} name="nombre" placeholder="Placeholder" id="first_name" type="text" className="validate" />
                                        <label htmlFor="first_name">First Name</label>
                                </div>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                        <select onChange={handleData} className="browser-default" name="pais">
                                                <option value="" disabled >Choose your option</option>
                                                <option value="1">Chile</option>
                                                <option value="2">Argentina</option>
                                                <option value="3">Perú</option>
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
                
		{
			cargando && <div className="progress"><div className="indeterminate"></div></div>

		}
	
		</div>
		</>

}	
export default Formulario
