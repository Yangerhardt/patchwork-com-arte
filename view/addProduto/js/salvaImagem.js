async function salvaImagem(entrada) {
  fetch("http://localhost:8080/arquivos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      codigoBase64: entrada,
    }),
  })
    .then((r) => r.json())
    .then((res) => console.log(res));
}

export default salvaImagem