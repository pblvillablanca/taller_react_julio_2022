const	express = require('express')
	app = express()
	Router = require('./Router.js')

app.use('/',Router)

app.listen(8080,()=>console.log('servidor iniciado correctamente'))
