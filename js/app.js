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
let scountTicket = document.getElementById('sconto')
let numberVagone = document.getElementById('carrozza')
let codeVagon = document.getElementById('code_vagon')

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
        prezzo = prezzo - ( prezzo * 0.2 );
        console.log('prezzo scontanto: ' + prezzo)
        scountTicket.innerHTML= 'sconto  20%';
        console.log(scountTicket.innerHTML)
       
    } else if (formAge.value == 'Over65'){
        prezzo = prezzo - ( prezzo * 0.4 );
        console.log('prezzo scontanto: ' + prezzo)
        scountTicket.innerHTML= 'sconto  40%';
        console.log(scountTicket.innerHTML)
    }
    else{
        prezzo = prezzo
        console.log('prezzo:' + prezzo)
    }
    
    nameSurname.innerHTML = formName.value;
    ticketPrice.innerHTML = prezzo.toFixed(2) + '\u20AC';
    numberVagone.innerHTML = Math.floor(Math.random() * 50);
    codeVagon.innerHTML = Math.floor(Math.random() * 10000) + 1;

    console.log('passeggero: ' + nameSurname.innerHTML)
    console.log('numero vagone: ' + numberVagone.innerHTML)
    console.log('codice vagone: ' + codeVagon.innerHTML)
    console.log('prezzo finale: ' + ticketPrice.innerHTML)

    
    
    
})


