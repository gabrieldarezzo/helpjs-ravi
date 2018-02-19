const $img = document.querySelector('[data-js="img"]')

const IMAGE_SRC = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true'

const handleClick = event => event.target.src = IMAGE_SRC

$img.addEventListener('click', handleClick)
