import procuraEmail from "./procuraEmail.js";
import VerificacaoLogin from "./verificaLogin.js";
import validaLogin from "./validaLogin.js";
import seUsuarioLogado from "../../user/js/seUsuarioLogado.js";
import procuraRole from "./procuraRole.js";

const email = document.querySelector(".login-email");
const senha = document.querySelector(".login-senha");
const form = document.querySelector("form");

// Caso o usuário esteja logado, será redirecionado para a página de usuário.
const data = localStorage.getItem("Authorization");
window.addEventListener("DOMContentLoaded", async () => {
  const dadosRecebidos = await seUsuarioLogado(data);

  if (dadosRecebidos.msg == "Logado") {
    const roleCadastro = await procuraRole(localStorage.getItem("Entrance_Mail"))
    if (roleCadastro == "user") {
      location.replace("../user/index.html");
    } else if ( roleCadastro == "admin" ) {
      location.replace("../admin/index.html");
    } else {
      console.error("Parece que houve um problema");
    }
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
      localStorage.setItem("Authorization", resultadoLogin);
      localStorage.setItem("Entrance_Mail", email.value)
      if (resultadoLogin == "Falha") {
        erroSenha.innerHTML = "Senha incorreta";
      } else {
        erroSenha.innerHTML = "";
        const roleCadastro = await procuraRole(email.value)
        if (roleCadastro == "user") {
          location.replace("../user/index.html");
        } else if ( roleCadastro == "admin" ) {
          location.replace("../admin/index.html");
        } else {
          console.error("Parece que houve um problema");
        }
      }
    }
  }
});
