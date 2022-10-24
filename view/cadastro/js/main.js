import consultaCep from "./consultaCep.js";
import salvaDadosCliente from "./salvaDadosCliente.js";
import verificaEmailExistente from "./verificaEmailExistente.js";
import Verificacao from "./verificacao.js";

// MUDAR OS QS PARA querySelectorALL E PEGAR CADA UM NO MOMENTO DO USO DENTRO DO ARRAY/OBJECT
const cep = document.querySelector(".cadastro-cep");
const bairro = document.querySelector(".cadastro-bairro");
const rua = document.querySelector(".cadastro-rua");
const numeroRua = document.querySelector(".cadastro-numero");
const complemento = document.querySelector(".cadastro-complemento");
const cidade = document.querySelector(".cadastro-cidade");
const estado = document.querySelector(".cadastro-estado");
const email = document.querySelector(".cadastro-email");
const nome = document.querySelector(".cadastro-nome");
const sobrenome = document.querySelector(".cadastro-sobrenome");
const senha = document.querySelector(".cadastro-senha1");
const confirmaSenha = document.querySelector(".cadastro-senha2");
const form = document.querySelector(".cadastro-produto");
const testeQS = document.querySelectorAll("input");

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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let cliente = {};
  let totalErros = [];


  Verificacao.verificaNomeSobrenome(nome.value, nome.name, totalErros);
  Verificacao.verificaNomeSobrenome(sobrenome.value, sobrenome.name, totalErros);
  Verificacao.verificaNumero(numeroRua.value, numeroRua.name, totalErros);
  Verificacao.verificaCep(cep.value, totalErros);
  Verificacao.verificaSenha(senha.value, totalErros);
  Verificacao.verificaSenhaDuplicada(senha.value, confirmaSenha.value, totalErros);
  Verificacao.verificaEmail(email.value, totalErros);
  await verificaEmailExistente(email.value, totalErros);
  

  if (totalErros.length === 0) {
    cliente = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: email.value,
      senha: senha.value,
      cep: cep.value,
      bairro: bairro.value,
      rua: rua.value,
      numero: numeroRua.value,
      complemento: complemento.value,
      cidade: cidade.value,
      estado: estado.value,
    };

    salvaDadosCliente(url, cliente);
    for (let elements of testeQS) {
      elements.value = "";
    }
    location.replace("./cadastroSuccess/");
  }
});
