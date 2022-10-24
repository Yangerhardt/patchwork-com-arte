class VerificacaoLogin {

  static verificaEmail = (email, arr) => {
    let erro = document.querySelector(".erro-email");
    if (email.trim() === "") {
      erro.innerHTML = "Digite o e-mail de cadastro";
      arr.push("erro-email")
    }
  };
  
  static verificaSenha = (senha, arr) => {
    let erro = document.querySelector(".erro-senha");
    if (senha.trim() === "") {
      erro.innerHTML = "Digite a senha";
      arr.push('erro-senha')
    } else if (senha.length < 5) {
      erro.innerHTML = "A senha deve conter no mínimo 5 caracteres"
    } else {
      erro.innerHTML = ""
    }
  };
}

export default VerificacaoLogin