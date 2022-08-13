const	mongoose  = require('mongoose')
	Schema = mongoose.Schema

const	EsquemaPersona = new Schema({
	nombre:{type:String},
	pais:{type:Number}
})

const	Persona = mongoose.model('personas',EsquemaPersona)

module.exports = Persona
