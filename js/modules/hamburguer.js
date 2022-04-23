const hamburguer = document.querySelector(".hamburguer");
const containerLinks = document.querySelector(".container-links");

export default function menuHamburguer() {
  containerLinks.classList.toggle('hidden')
}

hamburguer.addEventListener('click', menuHamburguer)