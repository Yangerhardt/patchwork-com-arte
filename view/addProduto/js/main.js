import verificaRole from "../../admin/js/verificaRole.js";
import seUsuarioLogado from "../../user/js/seUsuarioLogado.js";
import produtoCadastrado from "./produtoCadastrado.js";
import salvaDados from "./salvaDadosProduto.js";
import salvaImagem from "./salvaImagem.js";
import Verificacao from "./verificacao.js";

const nome = document.querySelector(".cadastro-nome");
const valor = document.querySelector(".cadastro-valor");
const formStatus = document.querySelector(".cadastro-status");
const img = document.querySelector(".cadastro-img");
const form = document.querySelector(".cadastro-produto");
const inputs = document.querySelectorAll("input");
const url = "http://localhost:8080/produtos";
let base64 = "";
const data = localStorage.getItem("Authorization");



function converterBase64() {
  const reader = new FileReader();
  reader.readAsDataURL(img.files[0]);

  reader.onload = function () {
    return (base64 = reader.result);
  };
}

window.addEventListener("load", async () => {
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

img.addEventListener("change", () => {
  converterBase64();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let erros = [];

  Verificacao.verificaNome(nome.value, erros);
  Verificacao.verificaValor(valor.value, erros);
  Verificacao.verificaStatus(formStatus.value, erros);
  Verificacao.verificaImg(img.value, erros);
/*   salvaDados(url, nome.value, valor.value, formStatus.value, img.value); */



// salvaImagem está ocasionando o reload da página, falta descobrir o por quê
  salvaImagem(base64.split(";base64,").pop());

/*   console.log(base64.split(";base64,").pop()); */
  if (erros.length == 0) {
    produtoCadastrado();
    for (let elements of inputs) {
      elements.value = "";
    }
  }
});
