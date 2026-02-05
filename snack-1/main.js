// inizio creandomi i due prompt dove far inserire i due numeri all'utente
let firstNumber = parseInt(prompt("Inserisci il primo numero"));
let secondNumber = parseInt(prompt("Inserisci il secondo numero"));

// SE il primo numero è maggiore lo stampa
if (firstNumber > secondNumber) {
    console.log('Il primo numero è più grande');
}

// ALTRIMENTI SE il secondo è maggiore viene stampato
else if (firstNumber < secondNumber) {
    console.log('Il secondo numero è più grande');
}

// ALTRIMENTI se i numeri sono uguali 
else {
    console.log('I due numeri sono uguali');
}

