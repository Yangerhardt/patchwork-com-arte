import pegaDados from "./pegaDadosCliente.js";
import VerificacaoLogin from "./verificaLogin.js";

const email = document.querySelector(".login-email");
const senha = document.querySelector(".login-senha");
const form = document.querySelector("form");
let clientes = []

form.addEventListener("submit", async (e) =>  {
  e.preventDefault();
  let erros = []

  VerificacaoLogin.verificaEmail(email.value, erros);
  VerificacaoLogin.verificaSenha(senha.value, erros);
  clientes = await pegaDados()

  console.log(clientes[0].email);
  console.log(clientes[0].senha);

});

