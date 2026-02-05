// imposto una variabile che mi darà il totale
let total = 0;

// chiedo all'utente di inserire 10 numeri 
// creo un ciclo for per evitare di scrivere ogni volta il prompt
for (let i = 1; i <= 10; i++) {
    let number = Number(prompt("Inserisci un numero"));
    total = total + number;
}

// stampo la somma dei numeri inseriti dall'utente
console.log(total);
