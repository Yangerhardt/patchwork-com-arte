async function pegaDados() {
  try {
    const response = await fetch("http://localhost:8080/clientes");
    const clientes = response.json();
    return clientes;
  } 
  catch (error) {
    console.log(error);
  }
}

export default pegaDados;
