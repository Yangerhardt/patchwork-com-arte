import verificaRole from "../../../admin/js/verificaRole.js";
import seUsuarioLogado from "../../js/seUsuarioLogado.js";

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
