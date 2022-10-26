const verificaRole = async () => {
  const emailStorage = localStorage.getItem("Entrance_Mail");
  let dados = "";

  const res = await fetch("http://localhost:8080/clientes");
  const data = await res.json();

  data.forEach((dado) => {
    if (dado.email === emailStorage) {
      dados = dado.role
    }
  });

  return dados
};

export default verificaRole;
