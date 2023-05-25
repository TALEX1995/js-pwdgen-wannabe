console.log('JS-OK');

// Esercizio

// Creazione variabile con l'elemento DOM in cui vogliamo scrivere

const passwordPlaceholder = document.getElementById('password');
console.log(passwordPlaceholder);

// Richiesta Nome all'utente

const name = prompt('Inserisci il tuo nome', 'Alex');
console.log(name);

// Richiesta Cognome utente

const surname = prompt('Inserisci il tuo cognome', 'Tanase');
console.log(surname);

// Richiesta colore preferito

const favoriteColor = prompt('Inserisci il tuo colore preferito', 'Nero');
console.log(favoriteColor);

// Somma delle variabili 

const recommendedPassword = name + surname + favoriteColor;
console.log(recommendedPassword);

// Inserimento testo all'iterno del DOM

passwordPlaceholder.innerText = recommendedPassword;
