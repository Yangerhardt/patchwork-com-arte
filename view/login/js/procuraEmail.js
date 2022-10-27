async function procuraEmail(email, arr) {
  const response = await fetch("http://localhost:8080/clientes");
  const dados = await response.json();
  let erro = document.querySelector(".erro-email");

  for (let dado of dados) {
    if (dado.email === email) {
      erro.innerHTML = "";
      return;
    } else {
      erro.innerHTML = "E-mail não encontrado";
    }
  }

  if (erro.innerHTML.length > 0) {
    arr.push(...["erroEmailLogin"]);
  }
}

export default procuraEmail;
