async function seUsuarioLogado(data) {
  let dadosRecebidos = "";

  const res = await fetch("http://localhost:8080/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${data}`,
    },
  });
  const dados = res.json();
  dadosRecebidos = dados;
  return dadosRecebidos;
}

export default seUsuarioLogado;
