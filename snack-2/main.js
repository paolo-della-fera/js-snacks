// inizio creandomi i due prompt dove far inserire le due parole all'utente
let firstWord = (prompt("Inserisci la prima parola"));
let secondWord = (prompt("Inserisci la seconda parola"));

// SE la prima parola è più lunga e lo stampa
if (firstWord.length > secondWord.length) {
    message = firstWord + " " + secondWord;
}

// ALTRIMENTI SE la second aparola è più lunga viene stampato
else if (firstWord.length < secondWord.length) {
    message = secondWord + " " + firstWord;
}

// ALTRIMENTI se le parole sono lunghe uguali stampa entrabi 
else {
    message = firstWord + " " + secondWord;
}

console.log(message);
