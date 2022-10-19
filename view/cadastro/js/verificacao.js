class Verificacao {

  static verificaCep = (cep) => {
    const reg = new RegExp(/^[0-9]+$/);
    let erro = document.querySelector(".erro-cep");
    if (cep.trim() === "" || cep.search(reg) < 0 || cep.length != 8) {
      erro.innerHTML = "Digite um CEP válido";
      return;
    } else {
      erro.innerHTML = "";
      return true
    }
  };

  static verificaNome = (nome) => {
    const reg = new RegExp(/[0-9]+/);
    let erro = document.querySelector(`.erro-nome`);
    if (nome.trim() == "" || nome.search(reg) > -1) {
      erro.innerHTML = "Campo obrigatório";
      return;
    } else {
      erro.innerHTML = "";
    }
  };

  static verificaSobrenome = (sobrenome) => {
    const reg = new RegExp(/[0-9]+/);
    let erro = document.querySelector(`.erro-sobrenome`);
    if (sobrenome.trim() == "" || sobrenome.search(reg) > -1) {
      erro.innerHTML = "Campo obrigatório";
      return;
    } else {
      erro.innerHTML = "";
    }
  };

  static verificaEmail = (email) => {
    var emailFormato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let erro = document.querySelector(".erro-email");
    if (email.match(emailFormato)) {
      erro.innerHTML = ""
    } else {
      erro.innerHTML = "Digite um e-mail válido"
    }
  }

  static verificaSenha = (senha) => {
    let erro = document.querySelector(".erro-senha1")
    if (senha.trim() === "") {
      erro.innerHTML = "Campo obrigatório"
    } else if (senha.length < 5) {
      erro.innerHTML = "Mínimo de 5 caracteres"
    }
     else {
      erro.innerHTML = ""
    }
  }

  static verificaSenhaDuplicada = (senha, duplicada) => {
    let erro = document.querySelector(".erro-senha2")
    if (senha === duplicada) {
      erro.innerHTML = ""
    } else {
      erro.innerHTML = "As senhas não correspondem"
    }
  }

}

export default Verificacao