const $btn = document.querySelector('[data-js="button"]')
const $input = document.querySelector('[data-js="input"]')

const removeDots = str => str.split('.').join('')

const handleClick = (event) => {
  const inputValue = $input.value
  alert(removeDots(inputValue))
}
$btn.addEventListener('click', handleClick)
