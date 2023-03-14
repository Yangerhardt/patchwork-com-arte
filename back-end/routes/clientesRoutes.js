import express from "express";
import clientes from "../models/Cliente.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { checkToken, checkHost } from "../middleware/Autenticacao.js";

let routerClientes = express.Router();

routerClientes // GOSTARIA DE TENTAR RETORNAR SOMENTE ALGUNS DADOS DOS CLIENTES, PORÉM AINDA NÃO SEI COMO...
  .get("/clientes", checkHost, (req, res) => {
    clientes.find((err, clientes) => {
      res.status(200).json(clientes);
    });
  })

  /*   .get("/clientes/:id", checkToken, checkHost, (req, res) => {
    const id = req.params.id;
    clientes.findById(id, "-senha", (err, clientes) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do cliente");
      } else {
        res.status(200).json(clientes);
      }
    });
  }) */

  .get("/clientes/:token", checkHost, (req, res) => {
    const token = req.params.token;
    const secret = process.env.SECRET;
    const id = jwt.verify(token, secret).id;
    clientes.findById(id, "-senha", (err, clientes) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do cliente");
      } else {
        res.status(200).json(clientes);
      }
    });
  })

  .post("/clientes", checkHost, async (req, res) => {
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
      role: req.body.role,
    });
    cliente.save((err, clientes) => {
      if (err) {
        res.status(500).send(`${err.message} - Falha ao cadastrar cliente`);
      } else {
        res.status(200).send(clientes);
      }
    });
  })

  .post("/clientes/auth", checkHost, async (req, res) => {
    const user = await clientes.findOne({ email: req.body.email });
    const checaSenha = await bcrypt.compare(req.body.senha, user.senha);

    if (!checaSenha) {
      res.status(422).json({ msg: "Falha" });
    } else {
      /*       res.status(200).json({ msg: "Conectado" }); */
      //Caso o usuário logue corretamente, gera um token de autenticação
      jwt.sign({ id: user._id }, process.env.SECRET, (err, token) => {
        if (err) {
          console.log(err);
        }
        res.json({ msg: token });
      });
    }
  })

  .patch("/clientes/:id", checkHost, (req, res) => {
    const id = req.params.id;
    clientes.findByIdAndUpdate(id, req.body, (err) => {
      if (err) {
        res.status(500).send("Falha ao encontrar id do cliente");
      } else res.status(200).send("Cliente atualizado com sucesso");
    });
  })

  .delete("clientes/:id", checkHost, (req, res) => {
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
