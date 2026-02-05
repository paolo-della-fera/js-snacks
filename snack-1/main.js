// inizio creandomi i due prompt dove far inserire i due numeri all'utente
let firstNumber = parseInt(prompt("Inserisci il primo numero"));
let secondNumber = parseInt(prompt("Inserisci il secondo numero"));

if (firstNumber > secondNumber) {
    console.log('Il primo numero è più grande');
}

else if (firstNumber < secondNumber) {
    console.log('Il secondo numero è più grande');
}

else {
    console.log('I due numeri sono uguali');
}
/* console.log(firstNumber, secondNumber); */
