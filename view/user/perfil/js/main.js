import verificaRole from "../../../admin/js/verificaRole.js";
import seUsuarioLogado from "../../js/seUsuarioLogado.js";
import passaUserId from "./passaUserId.js";

const data = localStorage.getItem("Authorization");
const inputs = document.querySelectorAll("input");

window.addEventListener("DOMContentLoaded", async () => {
  const dadosRecebidos = await seUsuarioLogado(data);

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

  const dadosUser = await passaUserId(data);
  for (let input of inputs) {
    const teste = input.name.toString();
    input.value = dadosUser[teste];
  }
});
