const showToolkit = document.querySelector('#showToolkit')
const containerToolkit = document.querySelector('.container-toolkit')

export default function show() {
  containerToolkit.classList.toggle('ativo')
}

showToolkit.addEventListener('click', show)