import express from "express";
import clientes from "../models/Cliente.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let routerClientes = express.Router();

//Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado." });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token inválido" });
  }
};

routerClientes
  .get("/clientes", (req, res) => {
    clientes.find((err, clientes) => {
      res.status(200).json(clientes);
    });
  })

  .get("/clientes/:id", checkToken, (req, res) => {
    const id = req.params.id;
    clientes.findById(id, "-senha", (err, clientes) => {
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
      role: req.body.role
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
      /*       res.status(200).json({ msg: "Conectado" }); */
      //Caso o usuário logue corretamente, gera um token de autenticação
      jwt.sign({ id: user._id }, process.env.SECRET, (err, token) => {
        if (err) {
          console.log(err);
        }
        res.json({ msg: token })
      });
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
