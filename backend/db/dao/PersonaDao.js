const Persona = require('./../esquemas/EsquemaPersona.js')

module.exports.insertarPersona = (nuevaPersona)=>{
	
	return new Promise((resolve,reject)=>{
		
		Persona.create(nuevaPersona,(err,doc)=>{

			if(err){
				reject(err)
			}else{
			   resolve(doc)	
			}
		})

	})

}


module.exports.obtenerPersonas = ()=>{

	return new Promise((resolve,reject)=>{
		Persona.find({},(err,docs)=>{
			
			if(err)
				reject(err)
			else
				resolve(docs)
		})
		
	})
}

