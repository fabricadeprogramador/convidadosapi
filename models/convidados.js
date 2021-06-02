"use strict"
var mongoose = require("mongoose")
var Schema = mongoose.Schema

var ConvidadoSchema = new Schema({
  nome: {
    type: String,
    required: "O campo nome é obrigatório"
  },
  idade: {
    type: Number,
    required: "O campo idade é obrigatório"
  },
  sexo: {
    type: String,
    required: "O campo sexo é obrigatório"
  }
})

module.exports = mongoose.model("Convidado", ConvidadoSchema)
