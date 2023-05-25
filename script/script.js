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
const surnameLowerCase = surname.toLowerCase();
console.log(surnameLowerCase);

// Richiesta colore preferito

const favoriteColor = prompt('Inserisci il tuo colore preferito', 'Nero');
const favoriteColorLowerCase = favoriteColor.toLowerCase();
console.log(favoriteColorLowerCase);

// Numero random tra 0 e 100 per la password

const randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber)

// Somma delle variabili 

const recommendedPassword = name + surnameLowerCase + favoriteColorLowerCase + randomNumber;
console.log(recommendedPassword);

// Inserimento testo all'iterno del DOM

passwordPlaceholder.innerText = recommendedPassword;
