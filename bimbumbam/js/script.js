/*
L’utente: sceglie pari o dispari.
L'utente: sceglie un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto.
*/
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
do {
  var scelta1Utente = prompt("scegli PARI o DISPARI");
  scelta1Utente = scelta1Utente.toUpperCase(0);
  console.log(scelta1Utente);
} while (scelta1Utente !== "PARI" || scelta1Utente !== "DISPARI" );




var scelta2Utente = parseInt(prompt("scegli un numero tra 1 e 5"));
console.log(scelta2Utente);

var sceltaCpu = random(1, 5);
console.log(sceltaCpu);

var totale = somma(scelta2Utente, sceltaCpu);
console.log(totale);

if (modZero(totale) && scelta1Utente === "PARI"){
  console.log("hai vinto");
} else{
  console.log("hai Perso");
}
