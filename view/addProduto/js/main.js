import salvaDados from "./salvaDados.js";
import salvaImagem from "./salvaImagem.js";
import Verificacao from "./verificacao.js";

const nome = document.querySelector(".cadastro-nome");
const valor = document.querySelector(".cadastro-valor");
const formStatus = document.querySelector(".cadastro-status");
const img = document.querySelector(".cadastro-img");
const form = document.querySelector(".cadastro-produto");
const sucesso = document.querySelector(".produto-cadastrado");
const url = "http://localhost:8080/produtos";
const CLIENT_ID = "e5f08dbf3c90edb";

/* const produtoCadastrado = () => {
  sucesso.innerHTML = `Produto cadastrado com sucesso
  <button class="produto-cadastrado-remove">x</button>
  `;
  sucesso.classList.add("p-2");

  const removeBtn = sucesso.querySelector(".produto-cadastrado-remove");
  removeBtn.addEventListener("click", () => {
    sucesso.classList.remove("p-2");
    sucesso.innerHTML = "";
  });
}; */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  Verificacao.verificaNome(nome.value);
  Verificacao.verificaValor(valor.value);
  Verificacao.verificaStatus(formStatus.value);
  Verificacao.verificaImg(img.value);
  salvaDados(url, nome.value, valor.value, formStatus.value, img.value);
  salvaImagem(base64.split(';base64,').pop())

    console.log(base64.split(';base64,').pop());
  /*   if() {
    produtoCadastrado();

    nome.value = "";
    valor.value = "";
    formStatus.value = "";
    img.value = "";
  } */
});

let base64 = "";

function teste() {
  const reader = new FileReader();
  reader.readAsDataURL(img.files[0]);

  reader.onload = function () {
    console.log('executado');
    return (base64 = reader.result);
  };
}

img.addEventListener("change", () => {;
  teste()
});
