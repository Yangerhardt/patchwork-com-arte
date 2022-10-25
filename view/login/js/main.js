import procuraEmail from "./procuraEmail.js";
import VerificacaoLogin from "./verificaLogin.js";
import validaLogin from "./validaLogin.js";
import seUsuarioLogado from "../../user/js/procuraLogin.js";

const email = document.querySelector(".login-email");
const senha = document.querySelector(".login-senha");
const form = document.querySelector("form");


// Caso o usuário esteja logado, será redirecionado para a página de usuário.
const data = localStorage.getItem("Authorization");
window.addEventListener("load", async () => {
  const dadosRecebidos = await seUsuarioLogado(data);

  if (dadosRecebidos.msg == "Logado") {
    location.replace("../user/index.html");
  }
});


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let erros = [];
  let erroSenha = document.querySelector(".erro-senha");

  VerificacaoLogin.verificaEmail(email.value, erros);
  VerificacaoLogin.verificaSenha(senha.value, erros);
  if (erros.length == 0) {
    await procuraEmail(email.value, erros);
    if (erros.length == 0) {
      const resultadoLogin = await validaLogin(email.value, senha.value);
      console.log(resultadoLogin);
      localStorage.setItem("Authorization", resultadoLogin);
      if (resultadoLogin == "Falha") {
        erroSenha.innerHTML = "Senha incorreta, tente novamente";
      } else {
        erroSenha.innerHTML = "";
        location.replace("../user/index.html");
      }
    }
  }
});
