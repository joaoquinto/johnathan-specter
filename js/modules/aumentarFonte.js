const fontSizeButton = document.querySelector('#fontSize')
const resetarFonteButton = document.querySelector('#resetarFonte')
const tags = ['h1', 'h2', 'p']

/* Necessário validar a quantidade de vezes que a função vai ser chamada */
export function fontSize() {
  const textos = tags
  textos.forEach((tag) => {
    const elements = document.querySelectorAll(`${tag}`)
    elements.forEach(element => {
      const sizeString = getComputedStyle(element).fontSize
      const size = parseInt(sizeString)
      const aumentarFonte = `${size + (size * 0.20)}px`
      element.style.fontSize = aumentarFonte
    })
  })
}


fontSizeButton.addEventListener('click', fontSize)

export function resetarFonte() {
  const textos = tags
  textos.forEach((tag) => {
    const elements = document.querySelectorAll(`${tag}`)
    elements.forEach(element => {
      element.removeAttribute('style')
    })
  })
}

resetarFonteButton.addEventListener('click', resetarFonte)