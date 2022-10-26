import seUsuarioLogado from "./seUsuarioLogado.js";
import verificaRole from "../../admin/js/verificaRole.js";

const sair = document.querySelector("#seç-sair");
const data = localStorage.getItem("Authorization");

window.addEventListener("DOMContentLoaded", async () => {
  const dadosRecebidos = await seUsuarioLogado(data);
  console.log(dadosRecebidos);

  const role = await verificaRole();
  if (role != "user") {
    location.replace("../home/");
    localStorage.clear();
  }

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
