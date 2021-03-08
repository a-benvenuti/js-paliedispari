/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
var variabileStamp = document.getElementById('stamp');
// FUNZIONE
function palindroma(stringa) {
    var l = stringa.length;
    for (var i = 0; i < l / 2; i++) {
        if (stringa.charAt(i) !== stringa.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
//  fine FUNZIONE

var parolaUtente = prompt("inserisci qui la porola da verificare se è palindroma");
// rendo la stringa tutta minuscola
parolaUtente = parolaUtente.toLowerCase(0);
// rendo la stringa tutta senza spazi per verificare le frasi
parolaUtente = parolaUtente.split(' ').join('');
// stampo a schermo se la parola e poi se è palindroma o non
if (palindroma(parolaUtente)) {
    variabileStamp.innerHTML = "la parola / frase da te inserita: " + parolaUtente +  "<br>" + " è una parola palindroma";
} else {
    variabileStamp.innerHTML = "la parola / frase da te inserita: " + parolaUtente + "<br>" + " non è palindroma";
}
