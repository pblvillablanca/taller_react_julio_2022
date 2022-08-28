import React,{useEffect,useState} from 'react'
import ItemPersona from './../itemPersona/ItemPersona'

const VerPersonas = ()=>{
	
	const [personas,setPersonas] = useState([])

	useEffect(()=>{
			
		fetch('http://localhost:8080/obtenerPersonas')
			.then(res=>res.json())
			.then(docs=>{
				console.log(docs)
				setPersonas(docs)
			})
			.catch(err=>{
				console.log(err)
			})
	},[])

	return <>
			
		<div className="container">
			<h4>Personas registradas</h4>
			{
				personas.map(p=><ItemPersona key={p._id} persona={p} />)
			}
		</div>

	       </>
}

export default VerPersonas
