import express from "express";
import clientes from "../models/Cliente.js";
import bcrypt from "bcrypt";

let routerClientes = express.Router();

routerClientes
  .get("/clientes", (req, res) => {
    clientes.find((err, clientes) => {
      res.status(200).json(clientes)
    });
  })

  .get("/clientes/:id", (req, res) => {
    const id = req.params.id;
    clientes.findById(id, '-senha', (err, clientes) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do cliente");
      } else {
        res.status(200).json(clientes);
      }
    });
  })

  .post("/clientes", async (req, res) => {
    const salt = await bcrypt.genSalt(12);
    let cliente = new clientes({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      senha: await bcrypt.hash(req.body.senha, salt),
      cep: req.body.cep,
      bairro: req.body.bairro,
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      cidade: req.body.cidade,
      estado: req.body.estado,
    });
    cliente.save((err, clientes) => {
      if (err) {
        res.status(500).send(`${err.message} - Falha ao cadastrar cliente`);
      } else {
        res.status(200).send(clientes);
      }
    });
  })

  .post("/clientes/auth", async (req, res) => {
    const user = await clientes.findOne({ email: req.body.email });
    const checaSenha = await bcrypt.compare(req.body.senha, user.senha);

    if (!checaSenha) {
      res.status(422).json({ msg: "Falha" });
    } else {
      res.status(200).json({ msg: "Conectado" });
    }
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
