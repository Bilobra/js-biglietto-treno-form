// elementi input form
PREZZO_AL_CHILOMETRO = 0.21
let formName = document.getElementById('form_name')
let formKm = document.getElementById('form_km')
let formAge = document.getElementById('form_age')
let prezzo = formKm.value * PREZZO_AL_CHILOMETRO
// elementi button /submit
const buttonElement = document.getElementById('invia')
console.log(buttonElement)
// elementi ticket
let nameSurname = document.getElementById('name_surname')
let ticketPrice = document.getElementById('ticket_price')

// event + click
buttonElement.addEventListener('click',
 function () {
    const inputElement = document.querySelector('input[name="name"]')
    console.log('nome: ' + inputElement.value)
    const inputElement2 = document.querySelector('input[name="chilometri"]')
    console.log('età: ' + inputElement2.value)
    const selectElement = document.querySelector('select[name="age"]')
    console.log(selectElement.value)

    if(formAge.value == 'Minorenne'){
        prezzo = prezzo - ( prezzo * 0.2 ) ;
        console.log(prezzo.value)
    } else if (formAge.value == 'Over65'){
        prezzo = prezzo - ( prezzo * 0.4 )
    }
})

nameSurname.innerHTML = formName.value
ticketPrice.innerHTML = prezzo
