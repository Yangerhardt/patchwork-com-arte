async function verificaEmailExistente(email, arr) {
  let erro = document.querySelector(".erro-email");
  const response = await fetch("http://localhost:8080/clientes")
  const dados = await response.json()

  dados.forEach(element =>  {
    if (element.email == email) {
      erro.innerHTML = "E-mail já cadastrado"
      arr.push(...['erroEmailCadastrado'])
    }
  });

}

export default verificaEmailExistente