async function salvaDadosCliente(url, objeto) {
  const erroCadastro = document.querySelector(".final-cadastro")

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
      senha: objeto.senha,
      cep: objeto.cep,
      bairro: objeto.bairro,
      rua: objeto.rua,
      numero: objeto.numero,
      complemento: objeto.complemento,
      cidade: objeto.cidade,
      estado: objeto.estado,
      role: objeto.role,
      data: new Date()
    }),
  })
    .then((res) => {
      res.json()
    })
    .then(console.log("Cliente cadastrado com sucesso"))
    .catch(error => {
      erroCadastro.innerHTML = "Ocorreu um erro, revise os seus dados"
      console.error(error);
    })
};


export default salvaDadosCliente