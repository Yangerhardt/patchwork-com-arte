const headerConfig = () => {
  var ver_rolagem = document.body; //document.getElementById('scrollableElement');

  ver_rolagem.addEventListener("wheel", checkScrollDirection);

  function checkScrollDirection(evento) {
    if (ScrollUp(evento)) {
      document.querySelector("#header").classList.add("sticky-top");
    } else {
      document.querySelector("#header").classList.remove("sticky-top");
    }
  }

  function ScrollUp(rolagem) {
    if (rolagem.wheelDelta) {
      //wheelDelta serve para retornar o valor da distância que o mouse rolou
      return rolagem.wheelDelta > 0; //Sempre que o valor do wheelDelta for positivo, quer dizer uma rolagem para cima
    }
    return rolagem.deltaY < 0;
  }
};

export default headerConfig;
