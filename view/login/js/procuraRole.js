async function procuraRole(email) {
  let dados = "";

  const res = await fetch("http://localhost:8080/clientes");
  const data = await res.json();

  data.forEach((dado) => {
    if (dado.email === email) {
      dados = dado.role;
    }
  });

  return dados;
}

export default procuraRole;
