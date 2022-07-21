
const buttonElement = document.querySelector('input[type="submit"]')
console.log(buttonElement)

buttonElement.addEventListener('click', function () {
    const inputElement = document.querySelector('input[name="name"]')
    console.log('nome: ' + inputElement.value)
    const inputElement2 = document.querySelector('input[name="chilometri"]')
    console.log('età: ' + inputElement2.value)
    const selectElement = document.querySelector('select[name="age"]')
    console.log(selectElement.value)
})