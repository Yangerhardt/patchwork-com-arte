async function seUsuarioLogado(entrada) {
   let dadosSaida = "";
 
   const res = await fetch(`http://localhost:8080/clientes/${entrada}`, {
     method: "GET",
     headers: {
       Authorization: `Bearer ${entrada}`,
     },
   });
   const dados = res.json();
   dadosSaida = dados;
   return dadosSaida;
 }
 
 export default seUsuarioLogado;
 
