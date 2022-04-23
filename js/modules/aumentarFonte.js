const fontSizeButton = document.querySelector('#fontSize')
const resetarFonteButton = document.querySelector('#resetarFonte')
const tags = ['h1', 'h2', 'p', 'button']

let validator = 0;

export function fontSize(event) {
  if (validator === 0) {
    const textos = tags
    textos.forEach((tag) => {
      const elements = document.querySelectorAll(`${tag}`)
      elements.forEach(element => {
        const sizeString = getComputedStyle(element).fontSize
        const size = parseInt(sizeString)
        const aumentarFonte = `${size + (size * 0.2)}px`
        element.style.fontSize = aumentarFonte
      })
    })
    validator++
  } else {
    event.preventDefault()
  }
}


fontSizeButton.addEventListener('click', fontSize)

export function resetarFonte() {
  if (validator === 1) {
    const textos = tags
    textos.forEach((tag) => {
      const elements = document.querySelectorAll(`${tag}`)
      elements.forEach(element => {
        const sizeString = getComputedStyle(element).fontSize
        const size = parseInt(sizeString)
        const resetar = `${size - (size * 0.20)}px`
        element.style.fontSize = resetar
      })
    })
    validator--
  }
}

resetarFonteButton.addEventListener('click', resetarFonte)