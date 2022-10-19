import consultaCep from "./consultaCep.js";
import Verificacao from "./verificacao.js";

const cep = document.querySelector(".cadastro-cep");
const bairro = document.querySelector(".cadastro-bairro");
const rua = document.querySelector(".cadastro-rua");
const cidade = document.querySelector(".cadastro-cidade");
const estado = document.querySelector(".cadastro-estado");
const email = document.querySelector(".cadastro-email");
const nome = document.querySelector(".cadastro-nome");
const sobrenome = document.querySelector(".cadastro-sobrenome");
const senha = document.querySelector(".cadastro-senha1");
const confirmaSenha = document.querySelector(".cadastro-senha2");
const form = document.querySelector(".cadastro-produto");

const url = "http://localhost:8080/clientes";

cep.addEventListener("focusout", async () => {
  if (Verificacao.verificaCep(cep.value)) {
    const dados = await consultaCep(cep.value);
    if (dados.erro != "true") {
      bairro.value = dados.bairro;
      rua.value = dados.logradouro;
      cidade.value = dados.localidade;
      estado.value = dados.uf;
    } else {
      let erro = document.querySelector(".erro-cep");
      erro.innerHTML = "Digite um CEP válido";
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let cliente = {};

  Verificacao.verificaEmail(email.value);
  Verificacao.verificaNomeSobrenome(nome.value, nome.name);
  Verificacao.verificaNomeSobrenome(sobrenome.value, sobrenome.name);
  Verificacao.verificaCep(cep.value);
  Verificacao.verificaSenha(senha.value);
  Verificacao.verificaSenhaDuplicada(senha.value, confirmaSenha.value);

  cliente = {
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value,
    senha: senha.value,
    cep: cep.value,
    bairro: bairro.value,
    rua: rua.value,
    numero: numero.value,
    complemento: complemento.value,
    cidade: cidade.value,
    estado: estado.value,
  };
});
