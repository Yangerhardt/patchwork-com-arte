import express from "express";
/* import db from "./config/dbConnect.js"; */
import cors from "cors"

/* db.on("error", console.log.bind("Erro de conexão"))
db.once("open", () => console.log("Conexão estabelecida com sucesso")) */

const app = express()
app.use(express.json())
app.use(cors())

export default app