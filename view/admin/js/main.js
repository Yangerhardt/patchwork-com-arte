import fadeEffects from "../../home/js/fadeEffects.js";
import headerConfig from "../../home/js/headerConfig.js";
import seUsuarioLogado from "../../user/js/seUsuarioLogado.js";
import verificaRole from "./verificaRole.js";

const sair = document.querySelector("#seç-sair");
const data = localStorage.getItem("Authorization");

fadeEffects();
headerConfig();

window.addEventListener("DOMContentLoaded", async () => {
  const dadosRecebidos = await seUsuarioLogado(data);

  const role = await verificaRole()
  if (role != "admin") {
    location.replace("../home/")
    localStorage.clear()
  }

  if (
    dadosRecebidos.msg == "Token inválido" ||
    dadosRecebidos.msg == "Acesso negado"
  ) {
    location.replace("../login/");
  }
});

sair.addEventListener("click", () => {
  localStorage.clear();
});
