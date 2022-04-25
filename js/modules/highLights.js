const links = document.querySelectorAll("a");
const highLightsLinksButton = document.querySelector("#highLightsLinks");

export function highLights() {
  links.forEach((link,index) => {
      const validator = link.classList.contains('call-to-action')
      if ((validator !== true) && index != 10 && index != 11 && index != 12 ) {
        link.classList.toggle("highLights");
      }
  });
}

highLightsLinksButton.addEventListener("click", highLights);
