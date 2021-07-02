/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// //email catch

// var email = prompt("inserisci la tua e-mail");
// var welcome = document.getElementById("result");

// //email list

// var emailList = ["a@mail", "b@mail", "c@mail", "d@mail", "e@mail"];


// //matching
// var result = false;

// for (i = 0; i < emailList.length; i++) {
//     if (email == emailList[i]) {
//         var result = true;
//         welcome.innerHTML = "Benvenuto: " + email;
//     }
// }

// if (result == false) {
//     welcome.innerHTML = "Acces denied ";
// }






/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
*/

//var
var winner = document.getElementById("winner");



// numero cpu
var cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log('numero cpu: ', cpuNumber);

// numero giocatore
var playerNumber = Math.floor(Math.random() * 6) + 1;
console.log('numero giocatore: ', playerNumber);

// stabilire vincitore

if (playerNumber > cpuNumber) {

    winner.innerHTML = ('hai vinto');
} else if (playerNumber < cpuNumber) {

    winner.innerHTML = ('hai perso');
} else {

    winner.innerHTML = ('pareggio');
}