import fadeEffects from "./fadeEffects.js";
import headerButtons from "./headerButtons.js";
import headerConfig from "./headerConfig.js";
import seUsuarioLogado from "../../user/js/procuraLogin.js";

let personalize = document.querySelector("#personalize");

let sobre_pers_btn = document.querySelector(".btn-personalizado");

/* // Caso o usuário esteja logado, será redirecionado para a página de usuário.
const data = localStorage.getItem("Authorization");
window.addEventListener("load", async () => {
  const dadosRecebidos = await seUsuarioLogado(data);

  if (dadosRecebidos.msg == "Logado") {
    location.replace("/view/user/index.html");
  }
}); */

fadeEffects();
headerButtons();
headerConfig();

// PERSONALIZE BUTTON
sobre_pers_btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  personalize.scrollIntoView({ behavior: "smooth" });
});

// PERSONALIZE BUTTON
