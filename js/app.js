// elementi input form

let formName = document.getElementById('form_name')
let formKm = document.getElementById('form_km')
let formAge = document.getElementById('form_age')


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
    console.log('km: ' + inputElement2.value)
    const selectElement = document.querySelector('select[name="age"]')
    console.log( 'età:' + selectElement.value)

    const PREZZO_AL_CHILOMETRO = 0.21
    let prezzo = formKm.value * PREZZO_AL_CHILOMETRO

    if(formAge.value == 'Minorenne'){
        prezzo = prezzo - ( prezzo * 0.2 ) 
        console.log(prezzo)
    } else if (formAge.value == 'Over65'){
        prezzo = prezzo - ( prezzo * 0.4 )
    }
    else{
        prezzo = prezzo
    }
    
    nameSurname.innerHTML = formName.value
    ticketPrice.innerHTML = prezzo.toFixed(2) + '\u20AC'
})


