async function salvaDados(url, nome, valor, status, img) {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      valor: valor,
      status: status,
      imagem: img,
      data: new Date()
    }),
  })
    .then((res) => res.json())
    .then(console.log("Cadastro realizado"))
};


export default salvaDados