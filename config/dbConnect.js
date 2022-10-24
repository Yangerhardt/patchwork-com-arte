import mongoose from "mongoose"
// Para poder usar arquivos .env é necessário instalar o DOTENV pelo npm e instanciar ele abaixo
import * as dotenv from 'dotenv'
dotenv.config()

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@yan.haimxhv.mongodb.net/patchwork-com-arte`
  )

const db = mongoose.connection

export default db