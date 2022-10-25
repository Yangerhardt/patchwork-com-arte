import seUsuarioLogado from "./procuraLogin.js";

const sair = document.querySelector("#seç-sair");
const data = localStorage.getItem("Authorization");

window.addEventListener("load", async () => {
  const dadosRecebidos = await seUsuarioLogado(data);

  if (
    dadosRecebidos.msg == "Token inválido" ||
    dadosRecebidos.msg == "Acesso negado"
  ) {
    location.replace("../login/index.html");
  }
});

sair.addEventListener("click", () => {
  localStorage.clear();
});
