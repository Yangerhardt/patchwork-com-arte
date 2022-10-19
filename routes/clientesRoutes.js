import express from "express";
import clientes from "../models/Cliente.js";

let routerClientes = express.Router();

routerClientes
  .get("/clientes", (req, res) => {
    clientes.find((err, clientes) => {
      res.status(200).json(clientes);
    });
  })

  .get("/clientes/:id", (req, res) => {
    const id = req.params.id;
    clientes.findById(id, (err, clientes) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do cliente");
      } else {
        res.status(200).json(clientes);
      }
    });
  })

  .post("/clientes", (req, res) => {
    let cliente = new clientes(req.body);
    cliente.save((err, clientes) => {
      if (err) {
        res.status(500).send(`${err.message} - Falha ao cadastrar cliente`);
      } else {
        res.status(200).send(clientes);
      }
    });
  })

  .patch("/clientes/:id", (req, res) => {
    const id = req.params.id;
    clientes.findByIdAndUpdate(id, req.body, (err) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do cliente");
      } else res.status(200).send("Cliente atualizado com sucesso");
    });
  })

  .delete("clientes/:id", (req, res) => {
    const id = req.params.id;
    clientes.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do cliente");
      } else {
        res.status(200).send("Cliente removido com sucesso");
      }
    });
  });

export default routerClientes;
