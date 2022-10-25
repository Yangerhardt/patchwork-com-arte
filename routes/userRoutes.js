import express from "express";
import jwt from "jsonwebtoken"

let userRouter = express.Router();

const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token inválido" });
  }
};

userRouter.get("/user", checkToken, (req, res) => {
  res.status(200).json({ msg: "Logado"})
});

/* const checkRole = (req, res, next) => {

} */

export default userRouter;
