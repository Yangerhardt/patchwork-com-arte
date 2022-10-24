import procuraEmail from "./procuraEmail.js";
import VerificacaoLogin from "./verificaLogin.js";
import validaLogin from "./validaLogin.js";

const email = document.querySelector(".login-email");
const senha = document.querySelector(".login-senha");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let erros = [];
  let erroSenha = document.querySelector(".erro-senha");

  VerificacaoLogin.verificaEmail(email.value, erros);
  VerificacaoLogin.verificaSenha(senha.value, erros);
  if (erros.length == 0 ) {
    await procuraEmail(email.value, erros);
    if (erros.length == 0 ) {
      const resultadoLogin = await validaLogin(email.value, senha.value)
      if (resultadoLogin == "Falha") {
        erroSenha.innerHTML = "Senha incorreta, tente novamente";
      } else {
        erroSenha.innerHTML = "";
        location.replace("../")
      }
    }
  }
  console.log(erros);

});
