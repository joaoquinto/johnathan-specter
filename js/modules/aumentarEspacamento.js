const tags = ["h1", "h2", "p", "a", "button"];
const espacamentoButton = document.querySelector("#aumentarEspacamento");
const resetarButton = document.querySelector('#resetarEspacamento')

export function espacamentoLetras() {
  tags.forEach((tag) => {
    const elements = document.querySelectorAll(`${tag}`);
    elements.forEach((element) => {
      element.style.letterSpacing = "1.5px";
    });
  });
}

espacamentoButton.addEventListener("click", espacamentoLetras);

export function resetarEspacamento() {
  tags.forEach((tag) => {
    const elements = document.querySelectorAll(`${tag}`);
    elements.forEach((element) => {
      element.style.letterSpacing = "unset";
    });
  });
}

resetarButton.addEventListener('click', resetarEspacamento)