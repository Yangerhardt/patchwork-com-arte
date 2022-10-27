import express from "express";
import jwt from "jsonwebtoken";
import { checkHost } from "../middleware/Autenticacao.js";

let userRouter = express.Router();

const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const secret = process.env.SECRET;
    const teste = jwt.verify(token, secret);
    console.log(teste); // Retorna o ID do banco de dados do usuário
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token inválido" });
  }
};

userRouter.get("/user", checkHost, checkToken, async (req, res) => {
  res.status(200).json({ msg: "Logado" });
});

export default userRouter;
