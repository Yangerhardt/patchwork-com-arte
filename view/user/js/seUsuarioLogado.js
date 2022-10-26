async function seUsuarioLogado(data) {
  let dadosSaida = "";

  const res = await fetch("http://localhost:8080/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${data}`,
    },
  });
  const dados = res.json();
  dadosSaida = dados;
  return dadosSaida;
}

export default seUsuarioLogado;
