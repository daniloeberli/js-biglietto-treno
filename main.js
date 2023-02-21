/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

const userKm = Number(prompt("Quanti km vuoi percorrere?"));
const userAge = Number(prompt("Quanti anni hai?"));

let userPrice = userKm * 0.21;

if (userAge < 18) {
    userPrice = userPrice - (userPrice*0.20);
} else if (userAge > 65){
    userPrice = userPrice - (userPrice*0.40);
}

console.log(Math.round(userPrice*100)/100);