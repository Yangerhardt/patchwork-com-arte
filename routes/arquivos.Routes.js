import express from "express";
import fs from "fs";

let routerArquivos = express.Router();

routerArquivos
  .post("/arquivos", (req, res) => {
    const data = new Date();
    fs.writeFile(
      `./public/produtos/image${"teste"}.png`,
      req.body.teste,
      { encoding: "base64" },
      function (err) {
        console.log("File created");
      }
    );
  });

export default routerArquivos

//Falta testar e ver se funcionou com o rotues

// ainda falta finalizar o upload de imagens com os problemas de CORS'