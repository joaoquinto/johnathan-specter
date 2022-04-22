const hamburguer = document.querySelector(".hamburguer");
const containerLinks = document.querySelector(".container-links");

export default function menuHamburguer() {
    containerLinks.classList.toggle('hidden')
}

hamburguer.addEventListener('click',menuHamburguer)


/* export function acessibilidade(){
    if (matchMedia('min-width:1000px').matches) {
        containerLinks.ariaOrientation = 'horizontal'
        containerLinks.ariaExpanded = 'true'
        hamburguer.ariaHidden = 'true'
    }else{
        containerLinks.ariaOrientation = 'vertical'
      containerLinks.ariaExpanded = 'true'
      hamburguer.ariaHidden = 'false'
    }
  }
  
  window.onresize = acessibilidade */