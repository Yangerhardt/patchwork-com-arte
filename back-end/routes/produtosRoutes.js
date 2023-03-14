import express from "express";
import { checkHost } from "../middleware/Autenticacao.js";
import produtos from "../models/Produto.js";

let routerProdutos = express.Router();

routerProdutos
  .get("/produtos", checkHost, (req, res) => {
    produtos.find((err, produtos) => {
      res.status(200).json(produtos);
    });
  })

  .get("/produtos/:id", checkHost, (req, res) => {
    const id = req.params.id;
    produtos.findById(id, (err, produtos) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do produto");
      } else {
        res.status(200).json(produtos);
      }
    });
  })

  .post("/produtos", checkHost, (req, res) => {
    let produto = new produtos(req.body);
    produto.save((err, produtos) => {
      if (err) {
        res.status(500).send(`${err.message} - Falha ao cadastrar produto`);
      } else {
        res.status(200).send(produtos);
      }
    });
  })

  .patch("/produtos/:id", checkHost, (req, res) => {
    const id = req.params.id;
    produtos.findByIdAndUpdate(id, req.body, (err) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do produto");
      } else [res.status(200).send("Produto atualizado com sucesso")];
    });
  })

  .delete("produtos/:id", checkHost, (req, res) => {
    const id = req.params.id;
    produtos.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do produto");
      } else {
        res.status(200).send("Produto removido com sucesso");
      }
    });
  });

export default routerProdutos;
