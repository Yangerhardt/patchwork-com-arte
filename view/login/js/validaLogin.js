async function validaLogin(email, senha) {
  let resLogin = "";

  await fetch("http://localhost:8080/clientes/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: email,
      senha: senha,
    }),
  })
    .then((resolve) => resolve.json())
    .then((response) => resLogin = response)
    .catch((error) => {
      console.log(error);
    });

    return resLogin.msg
}

export default validaLogin;
