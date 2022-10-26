const produtoCadastrado = () => {
  const sucesso = document.querySelector(".produto-cadastrado");

  sucesso.innerHTML = `Produto cadastrado com sucesso
    <button class="produto-cadastrado-remove">x</button>
    `;
  sucesso.classList.add("p-2");

  const removeBtn = sucesso.querySelector(".produto-cadastrado-remove");
  removeBtn.addEventListener("click", () => {
    sucesso.classList.remove("p-2");
    sucesso.innerHTML = "";
  });
};

export default produtoCadastrado