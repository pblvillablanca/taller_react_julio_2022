const 	express = require('express')
	Router = express.Router()
	PersonaDao = require('./db/dao/PersonaDao.js')	

Router.get('/',(req,res)=>{
	res.json({status:200})
})

Router.get('/obtenerPersonas',(req,res)=>{

	PersonaDao.obtenerPersonas()
		.then(docs=>{
			res.json(docs)
		})
		.catch(err=>res.status(500))
})

Router.post('/crearPersona',(req,res)=>{
	
	console.log(req)

	PersonaDao.insertarPersona(req.body)
		.then(doc=>{
			res.json(doc)
		})
		.catch(err=>{
			res.json(err)
		})

})

module.exports  = Router
