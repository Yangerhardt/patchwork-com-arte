let produtos = document.querySelectorAll('.produto')
// querySelectorAll vai retornar um ARRAY, por isso podemos utilizar depois o forEach() método
let produtos_all = document.querySelector('#produtos')
let sobre = document.querySelector('#sobre')
let personalize = document.querySelector('#personalize')
let carrossel = document.querySelector('div#carousel')
let final = document.querySelector('footer#final')
let sobre_pers_btn = document.querySelector('.btn-personalizado')

let sobre_btn = document.querySelector('#seç-sobre')
let prod_btn = document.querySelector('#seç-prod')
let pers_btn = document.querySelector('#seç-pers')
let cont_btn = document.querySelector('#seç-cont')


//EFEITOS DE FADE COM A ROLAGEM
produtos.forEach(div => {
  let coordenada_topo_prod = div.getBoundingClientRect().top

  if (coordenada_topo_prod < window.innerHeight - 50) {
    div.classList.add("na-pagina")
  } else {
    div.classList.add("fora-da-pagina")
  }
})

window.addEventListener('scroll', () => {
  produtos.forEach((div) => {
    let coordenada_topo_prod = div.getBoundingClientRect().top
    let coordenada_bot_prod = div.getBoundingClientRect().bottom

    if (coordenada_topo_prod < window.innerHeight - 30 && div.classList.contains('fora-da-pagina')) {
      div.classList.add("produtos-slide-in")
    } 
    if (coordenada_bot_prod > window.innerHeight + 200) {
      div.classList.remove('produtos-slide-in')
    }
  })
})

window.addEventListener('scroll', () => {
  let coordenada_topo_sobre = sobre.getBoundingClientRect().top
  let coordenada_bot_car = carrossel.getBoundingClientRect().bottom

  if (coordenada_topo_sobre < window.innerHeight - 50) {
    sobre.classList.add("fade")
  }
  if (coordenada_bot_car > window.innerHeight) {
    sobre.classList.remove('fade')
  }
})

window.addEventListener('scroll', () => {
  let coordenada_topo_pers = personalize.getBoundingClientRect().top
  let coordenada_bot_prod = produtos_all.getBoundingClientRect().bottom

  if (coordenada_topo_pers < window.innerHeight - 100) {
    personalize.classList.add("fade")
  }
  if (coordenada_bot_prod > window.innerHeight) {
    personalize.classList.remove('fade')
  }
})
//EFEITOS DE FADE COM A ROLAGEM


// BOTÕES DO HEADER
function page_up () {
  window.scroll(0, 300)
}

sobre_btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  sobre.scrollIntoView({behavior: 'smooth'})
})

prod_btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  produtos_all.scrollIntoView({behavior: 'smooth'})
})

pers_btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  personalize.scrollIntoView({behavior: 'smooth'})
})

cont_btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  final.scrollIntoView({behavior: 'smooth', block: 'end'})
})
// BOTÕES DO HEADER


// HEADER CONFIG
var ver_rolagem = document.body; //document.getElementById('scrollableElement');

ver_rolagem.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(evento) {
  if (ScrollUp(evento)) {
    document.querySelector('#header').classList.add('sticky-top')
  } else {
    document.querySelector('#header').classList.remove('sticky-top')
  }
}

function ScrollUp(rolagem) {
  if (rolagem.wheelDelta) { //wheelDelta serve para retornar o valor da distância que o mouse rolou
    return rolagem.wheelDelta > 0; //Sempre que o valor do wheelDelta for positivo, quer dizer uma rolagem para cima
  }
  return rolagem.deltaY < 0;
}
// HEADER CONFIG


// PERSONALIZE BUTTON
sobre_pers_btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  personalize.scrollIntoView({behavior: 'smooth'})
})

// PERSONALIZE BUTTON