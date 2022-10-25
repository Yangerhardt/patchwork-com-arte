const headerButtons = () => {
  let cont_btn = document.querySelector("#seç-cont");
  let final = document.querySelector("footer#final");

  function page_up() {
    window.scroll(0, 300);
  }

  cont_btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    final.scrollIntoView({ behavior: "smooth", block: "end" });
  });
};

export default headerButtons;
