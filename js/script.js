/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//email catch

var email = prompt("inserisci la tua e-mail");

//email list

var emailList = ["a@mail", "b@mail", "c@mail", "d@mail", "e@mail"];



//matching
var result = false;

for (i = 0; i < emailList.length; i++) {
    if (email == emailList[i]) {
        var result = true;
        var welcome = document.getElementById("result");
        welcome.innerHTML = "Benvenuto: " + email;

    }

}

if (result == false) {
    var welcome = document.getElementById("result");
    welcome.innerHTML = "Acces denied ";
}






/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
*/

//cpu number
// var cpuNumber = Math.floor(Math.random() * 5) + 1;
// console.log('numero random cpu: ', cpuNumber);