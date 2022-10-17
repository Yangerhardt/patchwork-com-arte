class Verificacao {
  
  static verificaNome = (nome) => {
    const reg = new RegExp(/[0-9]+/);
    let erro = document.querySelector(".erro-nome");
    if (nome.trim() == "" || nome.search(reg) > -1) {
      erro.innerHTML = "Campo obrigatório (somente caracteres)";
      return;
    } else {
      erro.innerHTML = "";
    }
  };

  static verificaValor = (valor) => {
    const reg = new RegExp(/^[0-9]+$/);
    let erro = document.querySelector(".erro-valor");
    if (valor.trim() == "" || valor.search(reg) < 0) {
      erro.innerHTML = "Campo obrigatório (somente valores)";
      return;
    } else {
      erro.innerHTML = "";
    }
  };

  static verificaStatus = (status) => {
    const reg = new RegExp(/[0-9]+/);
    let erro = document.querySelector(".erro-status");
    if (status.trim() == "" || status.search(reg) > -1) {
      erro.innerHTML = "Campo obrigatório (somente caracteres)";
      return;
    } else {
      erro.innerHTML = "";
    }
  };

  static verificaImg = (img) => {
    let erro = document.querySelector(".erro-img");
    if (img === "") {
      erro.innerHTML = "Campo obrigatório";
      return;
    } else {
      erro.innerHTML = "";
    }
  };
}

export default Verificacao;
