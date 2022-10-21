class Verificacao {

  static verificaCep = (cep, arr) => {
    const reg = new RegExp(/^[0-9]+$/);
    let erro = document.querySelector(".erro-cep");
    if (cep.trim() === "" || cep.search(reg) < 0 || cep.length != 8) {
      erro.innerHTML = "Digite um CEP válido";
      arr.push(...["erroCep"])
      return;
    } else {
      erro.innerHTML = "";
      return true
    }
  };

  static verificaNomeSobrenome = (nome, name, arr) => {
    const reg = new RegExp(/[0-9]+/);
    let erro = document.querySelector(`.erro-${name}`);
    if (nome.trim() == "" || nome.search(reg) > -1) {
      erro.innerHTML = "Campo obrigatório";
      arr.push(...[`erro${name}`])
      return;
    } else {
      erro.innerHTML = "";
      return true
    }
  };

  
  static verificaNumero = (numero, name, arr) => {
    let erro = document.querySelector(`.erro-${name}`);
    if (numero.trim() == "" || numero === null) {
      erro.innerHTML = "Campo obrigatório";
      arr.push(...[`erro${name}`])
      return;
    } else {
      erro.innerHTML = "";
      return true
    }
  };

  static verificaEmail = (email, arr) => {
    var emailFormato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let erro = document.querySelector(".erro-email");
    if (email.match(emailFormato)) {
      erro.innerHTML = ""
      return true
    } else {
      erro.innerHTML = "Digite um e-mail válido"
      arr.push(...[`erroEmail`])
    }
  }

  static verificaSenha = (senha, arr) => {
    let erro = document.querySelector(".erro-senha1")
    if (senha.trim() === "") {
      erro.innerHTML = "Campo obrigatório"
      arr.push(...[`erroSenhaVazia`])
    } else if (senha.length < 5) {
      erro.innerHTML = "Mínimo de 5 caracteres"
      arr.push(...[`erroSenhaTamanho`])
    }
     else {
      erro.innerHTML = ""
      return true
    }
  }

  static verificaSenhaDuplicada = (senha, duplicada, arr) => {
    let erro = document.querySelector(".erro-senha2")
    if (senha === duplicada) {
      erro.innerHTML = ""
      return true
    } else {
      erro.innerHTML = "As senhas não correspondem"
      arr.push(...[`erroSenhaDuplicada`])
    }
  }

}

export default Verificacao