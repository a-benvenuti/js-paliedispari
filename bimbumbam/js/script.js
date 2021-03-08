/*
L’utente: sceglie pari o dispari.
L'utente: sceglie un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto.
*/
var variabileStampScelta = document.getElementById('stamp_scelta');
var variabileNumGiocatore = document.getElementById('stamp_num1');
var variabileNumCpu = document.getElementById('stamp_num2');
var variabileStampEsito = document.getElementById('stamp_esito');
// FUNZIONI
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function somma(x, y){
  return x + y;
}
function modZero(z){
  if (z % 2 == 0){
    return true;
  }
  return false;
}
// fine FUNZIONI
// inserimento delle scelte da parte dell'utente con relativi controlli
var scelta1Utente = "";
do {
  scelta1Utente = prompt("scegli PARI o DISPARI");
  scelta1Utente = scelta1Utente.toUpperCase(0);
} while (scelta1Utente !== "PARI" && scelta1Utente !== "DISPARI" );
variabileStampScelta.innerHTML = "scelta tra pari e dispari: " + scelta1Utente;

var scelta2Utente = 0;
do {
  scelta2Utente = parseInt(prompt("scegli un numero tra 1 e 5"));
} while ((scelta2Utente < 1 || scelta2Utente > 5) || (isNaN(scelta2Utente)));
variabileNumGiocatore.innerHTML = "numero giocatore: " + scelta2Utente;

// Cpu genera il suo numero random
var sceltaCpu = random(1, 5);
variabileNumCpu.innerHTML = "numero cpu: " + sceltaCpu;


// verifica del vincitore
var totale = somma(scelta2Utente, sceltaCpu);
console.log(totale);
if ((modZero(totale) && scelta1Utente === "PARI") || (modZero(totale) == false && scelta1Utente === "DISPARI")){
  variabileStampEsito.innerHTML = "CONGRATULAZIONI! Hai Vinto!";
} else {
  variabileStampEsito.innerHTML = "MI DISPIACE! Hai Perso.";
}
