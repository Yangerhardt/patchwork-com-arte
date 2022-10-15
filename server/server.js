import app from "../app.js";

app.listen(8080, () => {
  console.log("Servidor escutando em http://localhost:8080");
});


// ROTAS
app.get("/", (req, res) => {
  res.status(200).send("Testando método GET")
})