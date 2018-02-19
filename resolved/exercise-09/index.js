const $btn = document.querySelector('[data-js="button"]')
const $input = document.querySelector('[data-js="input"]')

const handleClick = (event) => {
  const inputValue = $input.value
  alert(inputValue)
}
$btn.addEventListener('click', handleClick)
