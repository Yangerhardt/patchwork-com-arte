async function salvaDados(objeto) {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      nome: objeto.nome,
      sobrenome: objeto.sobrenome,
      email: objeto.email,
      senha: objeto.value,
      cep: objeto.cep,
      bairro: objeto.bairro,
      rua: objeto.rua,
      numero: objeto.numero,
      complemento: objeto.complemento,
      cidade: objeto.cidade,
      estado: objeto.estado,
      data: new Date()
    }),
  })
    .then((res) => res.json())
    .then(console.log("Cadastro de cliente realizado"))
};


export default salvaDados