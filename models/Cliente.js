import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema( {
  id: {type: String},
  nome: {type: String, required: true},
  sobrenome: {type: String, required: true},
  email: {type: String, required: true},
  senha: {type: String, required: true},
  cep: {type: String, required: true},
  bairro: {type: String, required: true},
  rua: {type: String, required: true},
  numero: {type: String, required: true},
  complemento: {type: String},
  cidade: {type: String, required: true},
  estado: {type: String, required: true},
  data: {type: Date}
})

const clientes = mongoose.model("clientes", clienteSchema)

export default clientes