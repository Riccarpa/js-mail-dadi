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

if (email == emailList[0] || email == emailList[1] || email == emailList[2] || email == emailList[3] || email == emailList[4]) {
    alert("welcome");
} else {
    alert("access denied");
}