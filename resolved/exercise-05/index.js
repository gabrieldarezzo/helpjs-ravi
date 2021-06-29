const $btn = document.querySelector('[data-js="button"]')
const $input = document.querySelector('[data-js="input"]')
const handleClick = (event) => {
  // Exercise 05
  alert($input.value.length)
}
$btn.addEventListener('click', handleClick)
