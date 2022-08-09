const 	express = require('express')
	Router = express.Router()

Router.get('/',(req,res)=>{
	res.json({status:200})
})

Router.post('/crearPersona',(req,res)=>{

	res.json({status:'Todo OK'})
})

module.exports  = Router
