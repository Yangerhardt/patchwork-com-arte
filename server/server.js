import app from "../app.js";
import routerProdutos from "../routes/produtosRoutes.js";
import routerClientes from "../routes/clientesRoutes.js";
import express from "express";
import fs from "fs";


app.listen(8080, () => {
  console.log("Servidor escutando em http://localhost:8080");
});

// ROTAS
app.get("/", (req, res) => {
  res.status(200).send("Testando método GET");
});

app.use(express.json(), routerProdutos, routerClientes);


// Post para criação de arquivos locais de imagens de produtos
/* app.post("/arquivos", (req, res) => {
  const data = new Date();
  fs.writeFile(
    `./public/produtos/image${"teste"}.png`,
    req.body.teste,
    { encoding: "base64" },
    function (err) {
      console.log("File created");
    }
  );
}); */