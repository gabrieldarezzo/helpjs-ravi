const $btn = document.querySelector('[data-js="button"]')
const $input = document.querySelector('[data-js="input"]')
const handleClick = (event) => {
  // Exercise 04
  alert($input.value)
}
$btn.addEventListener('click', handleClick)
