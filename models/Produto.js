import mongoose from "mongoose"

const produtoSchema = new mongoose.Schema( {
  id: {type: String},
  nome: {type: String, required: true},
  valor: {type: Number, required: true},
  status: {type: String, required: true},
  imagem: {type: String, required: true},
  data: {type: Date}
})

const produtos = mongoose.model("produtos", produtoSchema)

export default produtos