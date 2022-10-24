class VerificacaoProduto {
  
  static verificaNome = (nome, arr) => {
    const reg = new RegExp(/[0-9]+/);
    let erro = document.querySelector(".erro-nome");
    if (nome.trim() == "" || nome.search(reg) > -1) {
      erro.innerHTML = "Campo obrigatório (somente caracteres)";
      arr.push(...[`erro-nome`])
      return;
    } else {
      erro.innerHTML = "";
    }
  };

  static verificaValor = (valor, arr) => {
    const reg = new RegExp(/^[0-9]+$/);
    let erro = document.querySelector(".erro-valor");
    if (valor.trim() == "" || valor.search(reg) < 0) {
      erro.innerHTML = "Campo obrigatório (somente valores)";
      arr.push(...[`erro-valor`])
      return;
    } else {
      erro.innerHTML = "";
    }
  };

  static verificaStatus = (status, arr) => {
    const reg = new RegExp(/[0-9]+/);
    let erro = document.querySelector(".erro-status");
    if (status.trim() == "" || status.search(reg) > -1) {
      erro.innerHTML = "Campo obrigatório (somente caracteres)";
      arr.push(...[`erro-status`])
      return;
    } else {
      erro.innerHTML = "";
    }
  };

  static verificaImg = (img, arr) => {
    let erro = document.querySelector(".erro-img");
    if (img === "") {
      erro.innerHTML = "Campo obrigatório";
      arr.push(...[`erro-img`])
      return;
    } else {
      erro.innerHTML = "";
    }
  };
}

export default VerificacaoProduto;
