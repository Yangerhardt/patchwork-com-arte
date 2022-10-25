const fadeEffects = () => {

  let produtos = document.querySelectorAll(".produto");
let produtos_all = document.querySelector("#produtos");
let carrossel = document.querySelector("div#carousel");

produtos.forEach((div) => {
  let coordenada_topo_prod = div.getBoundingClientRect().top;

  if (coordenada_topo_prod < window.innerHeight - 50) {
    div.classList.add("na-pagina");
  } else {
    div.classList.add("fora-da-pagina");
  }
});

window.addEventListener("scroll", () => {
  produtos.forEach((div) => {
    let coordenada_topo_prod = div.getBoundingClientRect().top;
    let coordenada_bot_prod = div.getBoundingClientRect().bottom;

    if (
      coordenada_topo_prod < window.innerHeight - 30 &&
      div.classList.contains("fora-da-pagina")
    ) {
      div.classList.add("produtos-slide-in");
    }
    if (coordenada_bot_prod > window.innerHeight + 200) {
      div.classList.remove("produtos-slide-in");
    }
  });
});

window.addEventListener("scroll", () => {
  let coordenada_topo_sobre = sobre.getBoundingClientRect().top;
  let coordenada_bot_car = carrossel.getBoundingClientRect().bottom;

  if (coordenada_topo_sobre < window.innerHeight - 50) {
    sobre.classList.add("fade");
  }
  if (coordenada_bot_car > window.innerHeight ) {
    sobre.classList.remove("fade");
  }
});

window.addEventListener("scroll", () => {
  let coordenada_topo_pers = personalize.getBoundingClientRect().top;
  let coordenada_bot_prod = produtos_all.getBoundingClientRect().bottom;

  if (coordenada_topo_pers < window.innerHeight - 100) {
    personalize.classList.add("fade");
  }
  if (coordenada_bot_prod > window.innerHeight) {
    personalize.classList.remove("fade");
  }
});
//EFEITOS DE FADE COM A ROLAGEM

}

export default fadeEffects