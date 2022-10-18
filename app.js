import express from "express";
import db from "./config/dbConnect.js";
import cors from "cors"
import bodyParser from "body-parser";
-bodyParser

db.on("error", console.log.bind("Erro de conexão"))
db.once("open", () => console.log("Conexão estabelecida com sucesso"))

const app = express()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(express.json());
app.use(cors())


export default app