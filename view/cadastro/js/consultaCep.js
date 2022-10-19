let endereco = {};

async function consultaCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  await fetch(url)
    .then((res) => res.json())
    .then((dados) => (endereco = dados));

  return endereco;
}

export default consultaCep;
