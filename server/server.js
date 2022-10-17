import app from "../app.js";
import produtos from "../models/Produto.js";

app.listen(8080, () => {
  console.log("Servidor escutando em http://localhost:8080");
});


// ROTAS
app.get("/", (req, res) => {
  res.status(200).send("Testando método GET")
})

app.get("/produtos", (req, res) => {
  produtos.find((err, produtos) => {
    res.status(200).json(produtos)
  })
})

app.post("/produtos", (req, res) => {
  let produto = new produtos(req.body)
  produto.save((err, produtos) => {
    if (err) {
      res.status(500).send(`${err.message} - Falha ao cadastrar produto`)
    } else {
      res.status(200).send("Produto cadastrado com sucesso")
    }
  })
})

app.get("/produtos/:id", (req, res) => {
  const id = req.params.id
  produtos.findById(id, (err, produtos) => {
    if (err) {
      res.status(500).send('Falha ao encontrar id do produto')
    } else {
      res.status(200).json(produtos)
    }
  })
})

app.patch("/produtos/:id", (req, res) => {
  const id = req.params.id
  produtos.findByIdAndUpdate(id, req.body, (err) => {
    if (err) {
      res.status(500).send("Falha ao encontrar id do produto")
    } else [
      res.status(200).send("Produto atualizado com sucesso")
    ]
  })
})

app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id
  produtos.findByIdAndDelete(id, (err) => {
    if (err) {
      res.status(500).send("Falha ao encontrar id do produto")
    } else {
      res.status(200).send("Produto removido com sucesso")
    }
  })
})