// creo il mio array vuoto
let oddNumbers = []

// chiedo all'utente di inserire 6 numeri 
// creo un ciclo for per evitare di scrivere ogni volta il prompt
for (let i = 1; i <= 6; i++) {
    let number = Number(prompt("Inserisci un numero"));

    // SE alcuni dei numeri inseriti dall'utente sono dispari vengono inseriti nell'array
    if (number % 2 != 0) {
        oddNumbers.push(number);
    }
}

// stampo l'array con i numeri dispari 
console.log(oddNumbers);
