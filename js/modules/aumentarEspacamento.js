const tags = ["h1", "h2", "p", "a"];
const espacamentoButton = document.querySelector("#aumentarEspacamento");

/* NÂO FUNCIONA */
export function espacamentoLetras() {
  tags.forEach((tag) => {
    const elements = document.querySelectorAll(`${tag}`);
    elements.forEach((element) => {
      element.style.letterSpacing = 1.5;
      console.log(getComputedStyle(element).letterSpacing);
    });
  });
}
espacamentoButton.addEventListener("click", espacamentoLetras);
