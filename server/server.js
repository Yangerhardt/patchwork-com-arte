import app from "../app.js";
import routerProdutos from "../routes/produtosRoutes.js";
import routerClientes from "../routes/clientesRoutes.js";
import routerArquivos from "../routes/arquivos.Routes.js";
import userRouter from "../routes/userRoutes.js";
import express from "express";

const port = process.env.API_PORT || 8080

app.listen(port, () => {
  console.log("Servidor escutando em http://localhost:8080");
});

app.get("/", (req, res) => {
  res.status(200).send("Testando método GET");
});

app.use(
  express.json(),
  routerProdutos,
  routerClientes,
  routerArquivos,
  userRouter
);
