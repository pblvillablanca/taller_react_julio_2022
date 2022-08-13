const	express = require('express')
	app = express()
	Router = require('./Router.js')
	cors = require('cors')
	mongoose = require('mongoose')	

app.use(cors())
app.use(express.json())
app.use('/',Router)

mongoose.connect('mongodb://localhost:27017/taller_react')
	.then(()=>{
		console.log('conectado a mongoose')
		app.listen(8080,()=>console.log('servidor iniciado correctamente'))
	})
	.catch((err)=>{
		console.log('Error al contectar con mongo')
	})



//app.listen(8080,()=>console.log('servidor iniciado correctamente'))
