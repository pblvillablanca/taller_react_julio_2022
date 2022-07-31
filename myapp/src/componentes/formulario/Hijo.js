import React,{useEffect}  from 'react'

const Hijo = (props)=>{
	
	console.log(props)

	useEffect(()=>{
		console.log('Iniciando!')
	
		return ()=>{
			console.log('Desmontaje')
		}
	},[])

	return <h3>{props.saludo}</h3>
}

export default Hijo
